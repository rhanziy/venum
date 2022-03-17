const openBtn = document.getElementById('btn-open');
const header = document.querySelector('header');

openBtn.addEventListener('click', function(e){
    e.preventDefault();
    openBtn.classList.toggle('x');
    header.classList.toggle('open');
});
