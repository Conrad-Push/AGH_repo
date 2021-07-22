const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const gallery = document.querySelector('.gallery');
    const cardm = document.querySelector('.card-m');
    const cardmp = document.querySelector('.card-mp');
    const cardp = document.querySelector('.card-p');
    
    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        if(gallery)
        {
            gallery.classList.toggle('gallery-block');

        }
        else if(cardm && cardmp && cardp)
        {
            cardm.classList.toggle('cards-block');
            cardmp.classList.toggle('cards-block');
            cardp.classList.toggle('cards-block');
        }
        
        //Animate Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./Strona_img/${originalSrc}`;
    });
});
    
modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
});