
// JavaScript
document.getElementById("btnNextPage").addEventListener("click", function() {
  window.location.href = "index2.html";
});



//efeito do botão voltar ao Topo
function topo(){

  window.scrollTo(
      {
          top:0,
          left:0,
          behavior:"smooth"
      }

  )

}