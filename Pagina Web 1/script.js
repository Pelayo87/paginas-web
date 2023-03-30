const envoltorio = document.querySelector('.envoltorio');
const linkIniciosesion = document.querySelector('.link-iniciosesion');
const linkRegistrarse = document.querySelector('.link-registro');
const botonRegistro = document.querySelector('.botonregistro');
const simboloCerrar = document.querySelector('.simbolo-cierre');

linkRegistrarse.addEventListener('click', ()=> {
    envoltorio.classList.add('active');
});

linkIniciosesion.addEventListener('click', ()=> {
    envoltorio.classList.remove('active');
});

botonRegistro.addEventListener('click', ()=> {
    envoltorio.classList.add('active-popup');
});

simboloCerrar.addEventListener('click', ()=> {
    envoltorio.classList.remove('active-popup');
});





