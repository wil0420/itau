var modalnit = document.getElementById("nit");
var modalgracias = document.getElementById("gracias");

function openmodalnit(){
    modalnit.style.display = "block";
}

function closemodalnit(){
    modalnit.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalnit) {
      modalnit.style.display = "none";
    }
  }



  function tarjetas(id){
    var cards = document.querySelectorAll('.tarj')
    cards.forEach(removeclass);

    function removeclass(item, index) {
        item.classList.remove("card-active");
    }

    var element = document.getElementById(id);
    element.classList.add("card-active");


    var infocards = document.querySelectorAll('.infocard')
    infocards.forEach(agregarclase);

    function agregarclase(item, index) {
        item.classList.add("hide");
    }

    var elementinfo = document.getElementById(id+'-info');
    elementinfo.classList.remove("hide");

  }


