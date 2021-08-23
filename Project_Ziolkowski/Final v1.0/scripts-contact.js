const btnMail = document.querySelector('.card-m');
const input = "mailto: konrad.pusz7@gmail.com";
btnMail.addEventListener('click', () => {
    window.open(input);
});

const modal = document.querySelector(".modal");
const mCard = document.querySelector(".card-mp");

mCard.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
});