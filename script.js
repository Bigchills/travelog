var acccordionButton= document.getElementsByClassName("accordion-btn");
var i;
for(i=0; i <acccordionButton.length; i++){
    acccordionButton[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
        var content =this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        }else{
            content.style.display="block";
        }
    });
}

const btn=document.getElementById('menu-btn')
const nav=document.getElementsByClassName('hamburger-menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})