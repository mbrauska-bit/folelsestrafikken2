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

const visStartSkjerm = () => {
    trafikk.style.display = "flex";
    stotte.style.display = "none";
    resultat.innerHTML = "";
};

const leggTilAngreKnapp = () => {
    const knapp = document.createElement("button");
    knapp.type = "button";
    knapp.className = "angre-valg";
    knapp.textContent = "Angre valg";

    knapp.addEventListener("click", () => {
        visStartSkjerm();
    });

    resultat.appendChild(knapp);
};

const sjekkValg = (valg) => {

    if (valg === "green") {

        console.log("Jeg har det greit");

        trafikk.style.display = "none";

        resultat.innerHTML = `
            <div class="melding">
                <h2>Godt å høre!</h2>
                <p>Vi håper du får en fin dag videre </p>
            </div>
        `;
        leggTilAngreKnapp();

    } else if (valg === "yellow") {

        console.log("Jeg har det litt mye akkurat nå");

        trafikk.style.display = "none";

        resultat.innerHTML = `
            <div class="melding">
                <h2>Det er helt greit å ha mye å tenke på.</h2>
                <p>Her er noen enkle ting du kan prøve:</p>
                <ul class="tips-liste">
                    <li>Ta én liten oppgave av gangen.</li>
                    <li>Gå en kort pause og ta noen dype pust.</li>
                    <li>Be noen om hjelp tidlig, før det blir for mye.</li>
                    <li>Skriv ned det som må gjøres, så det blir mindre kaotisk.</li>
                    <li>Snakk med en lærer, rådgiver eller miljøarbeider hvis du trenger støtte.</li>
                </ul>
            </div>
        `;
        leggTilAngreKnapp();

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

            <h2>Miljøarbeidere</h2>

            <p>
                Du kan kontakte en miljøarbeider i Teams.
            </p>

            <img
                src="/img/miljøarbeider.jpg"
                alt="Miljøarbeidere"
            >

            <h3>Aya Bougrine</h3>
            <h3>Mira Helene Kristiansen</h3>

            <p>
                Åpne Teams og søk etter
                <strong>Aya Bougrine</strong>
                eller
                <strong>Mira Helene Kristiansen</strong>
                for å starte en chat.
            </p>

        </div>
    `;
    leggTilAngreKnapp();
});


radgiverButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">

            <h2>Rådgivere</h2>

            <p>
                Velg en rådgiver du ønsker å kontakte.
            </p>

            <div class="radgiver-profiler">

                <article class="radgiver-profil">

                    <img
                        src="./img/radgiver-1.jpeg"
                        alt="Rådgiver"
                    >

                    <div class="radgiver-info">
                        <h3>Nevin Budak</h3>
                        <p><strong>Avdeling</strong><br>Elevtjenester</p>
                        <p><strong>Telefon</strong><br>98 88 74 65</p>
                        <p><strong>E-post</strong><br><a href="mailto:nevinbudak@afk.no">nevinbudak@afk.no</a></p>
                    </div>

                </article>


                <article class="radgiver-profil">

                    <img
                        src="/img/radgiver-2.jpeg"
                        alt="Shahsawar Omarzae"
                    >

                    <div class="radgiver-info">
                        <h3>Shahsawar Omarzae</h3>
                        <p><strong>Avdeling</strong><br>Elevtjenester</p>
                        <p><strong>Telefon</strong><br>98 88 74 65</p>
                        <p><strong>E-post</strong><br><a href="mailto:shahsawaro@afk.no">shahsawaro@afk.no</a></p>
                    </div>

                </article>

                <article class="radgiver-profil">

                    <img
                        src="/img/NinaIrenHølås.jpeg"
                        alt="Nina Iren Hølås"
                    >

                    <div class="radgiver-info">
                        <h3>Nina Iren Hølås</h3>
                        <p><strong>Ansvar</strong><br>Medier og kommunikasjon vg1, vg2, vg3, Informasjonsteknologi og medieproduksjon vg1 og vg2 og påbygning til generell studiekompetanse VG3 og VG4</p>
                        <p><strong>Telefon</strong><br>976 51 683</p>
                        <p><strong>E-post</strong><br><a href="mailto:ninahol@afk.no">ninahol@afk.no</a></p>
                    </div>

                </article>

                <article class="radgiver-profil anniken-profil">

                    <img
                        src="./img/annikenwiborg.png"
                        alt="Anniken Wiborg"
                    >

                    <div class="radgiver-info">
                        <h3>Anniken Wiborg</h3>
                        <p class="info-label"><strong>Ansvar</strong></p>
                        <p>Idrettsfag vg1, vg2, vg3 og ansvar Helse og oppvekst vg1 og vg2</p>
                        <p class="info-label"><strong>Telefon</strong></p>
                        <p>982 15 508</p>
                        <p class="info-label"><strong>E-post</strong></p>
                        <p><a href="mailto:annikenwib@afk.no">annikenwib@afk.no</a></p>
                    </div>

                </article>

                <article class="radgiver-profil hege-profil">

                    <img
                        src="/img/Skjermbilde 2026-09-25 130258.png"
                        alt="Hege Trulsvik"
                    >

                    <div class="radgiver-info">
                        <h3>Hege Trulsvik</h3>
                        <p><strong>Ansvar</strong><br>Salg, service og reiseliv vg1 og vg2, og Elektro og datateknologi vg1, vg2 og vg3</p>
                        <p><strong>Telefon</strong><br>411 45 820</p>
                        <p><strong>E-post</strong><br><a href="mailto:hegetru@afk.no">hegetru@afk.no</a></p>
                    </div>

                </article>

            </div>

            <p>
                Åpne Teams og søk etter rådgiveren
                du ønsker å kontakte for å starte en chat.
            </p>

        </div>
    `;
    leggTilAngreKnapp();
});


helsesykepleierButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">

            <h2>Helsesykepleier</h2>

            <p>
                Du har valgt å snakke med en helsesykepleier.
            </p>

            <img
                src="/img/christina.jpg"
                alt="Helsesykepleier"
            >

            <h3>
                Christina Fredrika Elisabeth Krenauer
            </h3>

            <p>
                Åpne Teams og søk etter
                <strong>
                    Christina Fredrika Elisabeth Krenauer
                </strong>
                for å starte en chat.
            </p>

        </div>
    `;
    leggTilAngreKnapp();
});


ingenKontaktButton.addEventListener("click", () => {

    stotte.style.display = "none";

    resultat.innerHTML = `
        <div class="melding">

            <h2>Valget ditt er registrert</h2>

            <p>
                Du har valgt å ikke kontakte noen akkurat nå.
            </p>

            <p>
                <a href="https://mentalhelse.no/fa-hjelp/hjelpetelefonen/" target="_blank" rel="noopener noreferrer">
                    Hjelpetelefonen - Mental Helse
                </a>
            </p>

            <h3>Hjelpetelefonen</h3>

            <p>
                <strong>116 123</strong> er en gratis og døgnåpen telefontjeneste for alle som trenger noen å snakke med.
                Du kan være anonym og vi har taushetsplikt. Telefonen er åpen alle dager, året rundt, også på røde dager.
                Vi er her når alt annet er stengt.
            </p>

            <p>
                <strong>Telefonnummer:</strong> 116 123<br>
                Fra utlandet: +47 911 16 123<br>
                (vanlig mobiltakst gjelder)
            </p>

        </div>
    `;
    leggTilAngreKnapp();
});