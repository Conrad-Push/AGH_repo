let btnOpen = document.querySelector('button');
let input = document.querySelector('input');
btnOpen.addEventListener('click', () => {
    window.open(input.value, '_blank', 'height=600px, width=600px');
});