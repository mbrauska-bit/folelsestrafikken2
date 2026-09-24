const express = require("express");
const app = express();

app.set("view engine","ejs");    
app.set("views","./views");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");;
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
    res.render("login");
})



const greenButton = document.querySelector(".green");
const yellowButton = document.querySelector(".yellow");
const redButton = document.querySelector(".red");

const trafikk = document.querySelector(".trafikk");
const resultat = document.querySelector("#resultat");


const sjekkValg = (valg) => {

    if (valg === "green") {

        console.log("Jeg har det greit");


    } else if (valg === "yellow") {

        console.log("Jeg har det litt mye akkurat nå");


    } else if (valg === "red") {

        console.log("Jeg trenger støtte");

        // Start animation for the three old buttons
        trafikk.classList.add("skjul");


        // Wait until the animation is finished
        setTimeout(() => {

            // Remove the old buttons from the page
            trafikk.style.display = "none";


            // Create the new support choices
            resultat.innerHTML = `
                <div class="stotte">

                    <h2>Hva ønsker du å gjøre?</h2>

                    <button class="stotte-knapp">
                        Snakke med en lærer
                    </button>

                    <button class="stotte-knapp">
                        Snakke med rådgiver
                    </button>

                    <button class="stotte-knapp">
                        Snakke med helsesykepleier
                    </button>

                    <button class="stotte-knapp">
                        Jeg vil ikke kontakte noen akkurat nå
                    </button>

                </div>
            `;


            // Fade in the new choices
            resultat.classList.add("vis");

        }, 400);
    }
};


greenButton.addEventListener("click", () => {

    console.log("Grønn knappen klikket");

    sjekkValg("green");
});


yellowButton.addEventListener("click", () => {

    console.log("Gul knappen klikket");

    sjekkValg("yellow");
});


redButton.addEventListener("click", () => {

    console.log("Rød knappen klikket");

    sjekkValg("red");
});

app.listen(4000,()=>{
 console.log("Server runnning on http://localhost:4000");
})
