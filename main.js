let ratingStar = document.getElementById('ratingStar');

//agafo qualsevol click dintre del lloc "e" nom de l'argument
ratingStar.addEventListener("click", function(e){
  let radio = e.target.id;
  let id_select = radio.replace('radio', ' ');
  stars(id_select);

}, false);

function stars(parameter){
 
  for (let i = 0; i < parameter.length; i++){
    cleanColor[i].classList.remove("activeStar");
  }
}
function cleanColor(){
  for (let i = 0; i >= 5; i++){
    document.getElementById("rating" +i).classList.remove("checked");
    document.getElementById("rating" +i).classList.add("unchecked");
  }
}

