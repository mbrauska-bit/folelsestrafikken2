const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
let db = null;

async function connectToDb() {
  if (!db) {
    try {
      await client.connect();
      db = client.db('følelsesrafikken');
      console.log('MongoDB koblet til');
    } catch (error) {
      console.log('MongoDB ikke tilgjengelig, fortsetter uten database');
      db = null;
    }
  }
  return db;
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));



app.get('/', (req, res) => {
  res.render('index', { moods: Object.values(moods), selected: null });
});

app.post('/valgt', async (req, res) => {
  const choice = moods[req.body.mood];

  try {
    const database = await connectToDb();
    if (database) {
      await database.collection('responses').insertOne({
        mood: req.body.mood,
        createdAt: new Date()
      });
    }
  } catch (error) {
    console.error('Feil ved lagring i MongoDB:', error);
  }

  res.render('index', { moods: Object.values(moods), selected: choice });
});

const server = app.listen(port, () => {
  console.log('Serveren kjører på http://localhost:3000');
});

process.on('SIGINT', async () => {
  try {
    await client.close();
  } finally {
    server.close();
    process.exit(0);
  }
});
