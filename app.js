let slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".arrow.prev");
let nextBtn = document.querySelector(".arrow.next");
const dots = document.getElementsByClassName("dot");
let slideNum = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
});

prevBtn.addEventListener("click", () => {
    if (slideNum > 0) {
        slideNum--;
        slideImage();
        colorDot();
    }
    else if (slideNum === 0) {
        slideNum = slides.length -1
        slideImage();
        colorDot();
    }
});

nextBtn.addEventListener("click", () => {
    if (slideNum < slides.length - 1) {
        slideNum++;
        slideImage();
        colorDot();
    }
    else if(slideNum == slides.length - 1){
        slideNum = 0;
        slideImage();
        colorDot();

    }
});

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${slideNum * 100}%)`;
        }
    );
        // if(slideNum === slides.length){
        //     slideNum = 0;
        // }
    // if (slideNum === slides.length - 1) {
    //     nextBtn.style.pointerEvents = "none";
    //     nextBtn.style.opacity = "0";
    // } else {
    //     nextBtn.style.pointerEvents = "auto";
    //     nextBtn.style.opacity = "1";
    // }

    // if (slideNum === 0) {
    //     prevBtn.style.pointerEvents = "none";
    //     prevBtn.style.opacity = "0";
    // } else {
    //     prevBtn.style.pointerEvents = "auto";
    //     prevBtn.style.opacity = "1";
    // }
}

slideImage();

function colorDot() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[slideNum].classList.add("active");
}

function firstDot(){
    dots[0].classList.add("active");
}
firstDot()
    

// function currentSlide(slideIndex) {
//     slideNum = slideIndex - 1;
//     if (slideNum < 0) {
//         slideNum = 0;
//     } else if (slideNum >= slides.length) {
//         slideNum = slides.length - 1;
//     }
//     updateDots(slideNum);
//     slideImage();
// }

// currentSlide(slideIndex);
