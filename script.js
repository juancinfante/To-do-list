
  const lista = document.getElementById("lista");

  function Agregar(){

    const quehacer = document.getElementById("input").value;


    const texto = `<li class="item" id="item">
                      <p class="texto">${quehacer}</p>
                      <i class="far fa-trash-alt" onclick="Borrar()"></i>
                   </li>`;
    if(quehacer){
      lista.insertAdjacentHTML("beforeend",texto);
    }else{
      alert("Ingrese un que hacer.");
    }
  }

function Borrar(){
    // var ele = document.getElementById("item");
    // ele.style.display = "none";
    var ele = document.getElementById("item");
    ele.parentNode.removeChild(ele);
    return false;
  }
