var button = document.querySelector(".history-more")
var documentation = document.querySelector(".history")
var open = function(){
  documentation.classList.toggle("is-open")
}
button.addEventListener("click",open)

