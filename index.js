var buttonhistory = document.querySelector(".history-more")
var documentation1 = document.querySelector(".history")
var open = function(){
  documentation1.classList.toggle("is-open")
}
buttonhistory.addEventListener("click",open)

var buttonglyphes = document.querySelector(".a-glyphes-view")
var documentation2 = document.querySelector(".all-glyphes")
var open = function(){
  documentation2.classList.toggle("is-open")
}
buttonglyphes.addEventListener("click",open)
