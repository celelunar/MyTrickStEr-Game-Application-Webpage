let nextTown = document.getElementById('next');
let prevTown = document.getElementById('prev');

let sliderSet = document.querySelector('.slider');
let townSet = sliderSet.querySelector('.slider .town-container');
let thumbnailSet = document.querySelector('.slider .thumbnail');
let thumbnailTownSet = thumbnailSet.querySelectorAll('.town');

thumbnailSet.appendChild(thumbnailTownSet[0]);

let timeRunning = 3000;
let timeAutoNext = 7000;

nextTown.onclick = function(){
    showSlider('next');    
}

prevTown.onclick = function(){
    showSlider('prev');    
}

let runTimeOut;

let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

function showSlider(type){
    let  townSliderSet = townSet.querySelectorAll('.slider .town-container .town');
    let thumbnailTownSet = document.querySelectorAll('.slider .thumbnail .town');
    
    if(type === 'next'){
        townSet.appendChild(townSliderSet[0]);
        thumbnailSet.appendChild(thumbnailTownSet[0]);
        sliderSet.classList.add('next');
    }else{
        townSet.prepend(townSliderSet[townSliderSet.length - 1]);
        thumbnailSet.prepend(thumbnailTownSet[thumbnailTownSet.length - 1]);
        sliderSet.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        sliderSet.classList.remove('next');
        sliderSet.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}