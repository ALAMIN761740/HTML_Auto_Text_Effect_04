const containerE1 = document.querySelector(".container");

const careers = ["WEB DEVELOPER", "UI/UX DESIGNER", "GRAPHIC DESIGNER", "FREELANCER"];


let careerIndex = 0;
let characterIndex = 0;



updateText();

function updateText() {
    containerE1.innerHTML = `<h1 class="title">I AM ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    characterIndex++;
    setTimeout(() => {
        if (characterIndex > careers[careerIndex].length) {
            careerIndex++;
            characterIndex = 0;
        }
        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
        updateText();
    }, 200);

}