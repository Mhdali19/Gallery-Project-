let image = document.getElementById("image"); 
let src = image.getAttributeNode('src'); 
let images = ["./naruto.jpg", "./luffy.jpg", "./ai.jpg" ]
let luffy = "./luffy.jpg";
let ai = "./ai.jpg"; 
let naruto = "./naruto.jpg"; 
let countimage = 0; 
 
function prev () {
    src.value = images[countimage];

    countimage = (countimage === 0) ? images.length - 1 : countimage - 1;
     
}
   

function next () {
    src.value = images[countimage];

    countimage = (countimage + 1) % images.length; 
}