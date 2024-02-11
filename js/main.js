var item = document.querySelectorAll(".item img");
var sliderContainer = document.getElementById("sliderContainer");
var slider = document.querySelector(".slider");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var close = document.querySelector(".close");

var temp;
for (let i = 0; i < item.length; i++) {

    item[i].addEventListener("click" , function(e){
temp = i;
        
        sliderContainer.classList.replace("d-none" , "d-flex");

        var imgSrc = e.target.getAttribute("src");

        slider.style.backgroundImage = `url(${imgSrc})`;
        
    })
}
close.addEventListener("click",x)

function x() {
    sliderContainer.classList.replace("d-flex" , "d-none");
}

right.addEventListener("click",next)

function next() {
    temp++;
if(temp>=item.length)temp=0;
slider.style.backgroundImage = `url(${item[temp].getAttribute("src")})`;
}
left.addEventListener("click",prev)

function prev() {
    temp--;
if(temp<0)temp=item.length -1;
slider.style.backgroundImage = `url(${item[temp].getAttribute("src")})`;
}
document.addEventListener("keyup" ,function(e){
    if(sliderContainer.classList.contains("d-flex")){
        switch (e.key) {
            case "ArrowLeft":
                prev()
                break;
                case "ArrowRight":
                next()
                break;
                case "Escape":
                x()
                break;
        }
    }
})

document.addEventListener("click" ,function(e){
    if( e.target !=slider&&e.target !=left&&e.target !=right){
if (sliderContainer.classList.contains("d-flex")) {
    e.stopPropagation()
    x();
}
        

    };
},true);






        var xAxis;
        slider.addEventListener("touchmove",function(e){
                slider.style.cursor="drag"
if (xAxis = e.touches[0].clientX+400) {
    // if(xAxis = e.touches.clientY){return}
    next()
}else if(xAxis = e.touches[0].clientX -400){
    // if(xAxis = e.touches.clientY){return}
prev()

}
})


