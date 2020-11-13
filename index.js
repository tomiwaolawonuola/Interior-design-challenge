



const oppen = document.getElementById('open');
const klose = document.getElementById('close')
const container = document.getElementById('mobile-nav');


oppen.addEventListener('click', ()=>{
    container.classList.toggle('active');
});

klose.addEventListener('click', ()=>{
    container.classList.remove('active')
})

