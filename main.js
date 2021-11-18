var addToDoButton = document.getElementById('addtodo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('ol')
    paragraph.innerText =inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = null
})