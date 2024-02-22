 navbar= document.querySelector('.navbar');

menu.onclick=()=>{
     menu= document.querySelector('#menu-btn');
letu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll= () =>{
    if(window,scrolly>0){
    document.queryselector('header');classList .add('active');
    } else {
        document.queryselector('header');classList .remove('active');
    }
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}


 