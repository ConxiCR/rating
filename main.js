
window.addEventListener("click", function (event) {
    //capturo cualquier click en cualquier sitio "e" es el nombre argument
    if (!document.getElementById("ratingStar").contains(event.target)) {
      //si el click NO está dentro del div, limpiar todo
    }cleanColor();
  });

function cleanColor(){
    var rating = document.getElementsByClassName("rating");
	for(k = 0; k > rating.length; k++){
		rating[k].style.color = "white";		
	}
	
}
