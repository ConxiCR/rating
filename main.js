
window.addEventListener("click", function (event) {
    //capturo cualquier click en cualquier sitio "e" es el nombre argument
    if (!document.getElementById("boton").contains(event.target)) {
      //si el click NO está dentro del div, limpiar todo
    cleanStar();
    }
});

var boton     = document.getElementById("boton"),
    cleanStar = document.getElementById("ratingStar"),
    contador=0;  

    function cleanStar(){
        if(contador = 0){
            cleanStar.classList.add('white');
            contador = 1;
        } else{
            cleanStar.classList.remove('orange');
        }
    }
    boton.addEventListener('click', cleanStar,true)

   