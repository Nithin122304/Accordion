let next = document.querySelector( '.next' );
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll( ".item" ),  // get all the list
    current = document.querySelector(".slider").appendChild(items[0]);   //get first item and append to last
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll( ".item" ),  // get all the list
    current = document.querySelector(".slider").prepend(items[items.length-1]);   //get first item and append to last
})