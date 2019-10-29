var button = document.querySelector('button');//recupère dans une variable mon bouton RAZ dand le fichier HTML
function resetForm(){//crée une fonction pour effacer mes champs
  var fields = document.querySelectorAll('input');//recupère dans une variable mes inputs HTML
  for(let i=0; i<fields.length; i++){
    fields[i].value = '';//defini la valeur souhaité
  }
}
button.onclick = function(){//donner la fonction reset à mon bouton
  resetForm()
};
