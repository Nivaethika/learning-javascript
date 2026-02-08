var popupoverlay=document.querySelector('.overlay');
var popupbox=document.querySelector('.popup-box');
var addpopupbutton=document.getElementById('add-popup-button');
addpopupbutton.addEventListener('click',function(){
    popupoverlay.style.display='block';
    popupbox.style.display='block';
});
var cancelbutton=document.getElementById('cancel-popup');
cancelbutton.addEventListener('click',function(event){
    popupoverlay.style.display='none';
    popupbox.style.display='none';
    event.preventDefault();
});

var container=document.querySelector('.container');
var booktitleinput=document.getElementById('book-title-input');
var bookauthorinput=document.getElementById('book-author-input');
var bookdescriptioninput=document.getElementById('book-description-input');
var addbook=document.getElementById('ADD-BOOK');
addbook.addEventListener('click',function(event){
    event.preventDefault();
    var div=document.createElement('div');
    div.setAttribute('class','book-container');
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">DELETE</button>` ;
    container.append(div);
    popupoverlay.style.display='none';
    popupbox.style.display='none';
});

function deletebook(event){
    event.target.parentElement.remove();
}