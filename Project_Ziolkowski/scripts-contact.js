const btnMail = document.querySelector('.card-m');
const input = "mailto: konrad.pusz7@gmail.com";
btnMail.addEventListener('click', () => {
    window.open(input);
});