var allElems = document.querySelectorAll(".elem");
var allfullElems = document.querySelectorAll('.fullElem')
allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
        allfullElems[elem.id].style.display = 'block'
    })
})