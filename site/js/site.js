function toggleMenu(){
    let button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    let menu = document.getElementByIdClassName('js-menu');
    menu[0].classList.toggle("active");
}

window.addEventListener("scroll",fixPhototoOnScroll,false);

function showImage(image){
    var newImage=document.createElement('img');
    newImage.src=image.src;
    newImage.removeAttribute('onclick');
    var modal= document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existinImage= modal.querySelector('img');
    if(existinImage)
    {
        modal.removeChild(existinImage);

    }
    modal.appendChild(newImage);
    
}

function cerrarModal(){/*19/01*/
    var modal= document.getElementById('preview');
    modal.classList.remove('showModal')
}