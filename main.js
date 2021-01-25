
window.addEventListener("click", function (event) {
    //capturo cualquier click en cualquier sitio "e" es el nombre argument
    if (!document.getElementById("ratingStar").contains(event.target)) {
      //si el click NO está dentro del div, limpiar todo
    }cleanColor();
  });

function cleanColor(){
    document.getElementById("ratingStar").classList.remove("rgb(255,165,0)");
    document.getElementById("ratingStar").classList.add("white)");
}
   
