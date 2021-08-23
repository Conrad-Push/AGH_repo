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
