var modalnit = document.getElementById("nit");
var modalgracias = document.getElementById("gracias");

function openmodalnit(){
    modalnit.style.display = "block";
}

function closemodalnit(){
    modalnit.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modalnit.style.display = "none";
    }
  }