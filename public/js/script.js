const greenButton = document.querySelector(".green");
const yellowButton = document.querySelector(".yellow");
const redButton = document.querySelector(".red");

const miljoarbeiderButton = document.querySelector(".miljoarbeider");
const radgiverButton = document.querySelector(".radgiver");
const helsesykepleierButton = document.querySelector(".helsesykepleier");
const ingenKontaktButton = document.querySelector(".ingen-kontakt");

const trafikk = document.querySelector(".trafikk");
const stotte = document.querySelector(".stotte");
const resultat = document.querySelector("#resultat");


const sjekkValg = (valg) => {

    if (valg === "green") {

        console.log("Jeg har det greit");

        trafikk.style.display = "none";

        resultat.innerHTML = `
            <div class="melding">
                <h2>Godt å høre!</h2>
                <p>Vi håper du får en fin dag videre 😊</p>
            </div>
        `;


    } else if (valg === "yellow") {

        console.log("Jeg har det litt mye akkurat nå");

        trafikk.style.display = "none";

        resultat.innerHTML = `
            <div class="melding">
                <h2>Det er helt greit å ha mye å tenke på.</h2>
                <p>Ta det rolig og prøv å ta én ting om gangen.</p>
            </div>
        `;


    } else if (valg === "red") {

        console.log("Jeg trenger støtte");

        trafikk.style.display = "none";
        stotte.style.display = "flex";
    }
};


greenButton.addEventListener("click", () => {
    sjekkValg("green");
});


yellowButton.addEventListener("click", () => {
    sjekkValg("yellow");
});


redButton.addEventListener("click", () => {
    sjekkValg("red");
});


miljoarbeiderButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">
            <h2>Miljøarbeider</h2>
            <p>Du har valgt å snakke med en miljøarbeider.</p>
            <button>Send forespørsel</button>
        </div>
    `;
});


radgiverButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">
            <h2>Rådgiver</h2>
            <p>Du har valgt å snakke med en rådgiver.</p>
            <button>Send forespørsel</button>
        </div>
    `;
});


helsesykepleierButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">
            <h2>Helsesykepleier</h2>
            <p>Du har valgt å snakke med en helsesykepleier.</p>
            <button>Send forespørsel</button>
        </div>
    `;
});


ingenKontaktButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">
            <h2>Valget ditt er registrert</h2>
            <p>Du har valgt å ikke kontakte noen akkurat nå.</p>
        </div>
    `;
});