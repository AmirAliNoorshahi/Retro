const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.bnt');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.remove('hidden')
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.add('hidden')
});


const navExpand = document.getElementById('nav-expand');
const navExpandList =document.getElementById('nav-expand-list');
const navExpandIcon =document.getElementById('nav-expand-icon');

navExpand.addEventListener('click', ()=>{
    navExpandList.classList.toggle('show-list')
    navExpandIcon.classList.toggle('rotate-icon')
});
   




const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator =document.querySelector(".slider-indicator");


const updateIndicator = (tab, index) => {
    sliderIndicator.style.transform = `translateX(${tab.
    offsetLeft - 20}px)`
    sliderIndicator.style.width = `${tab.getBoundingClientRect
    ().width}px`
}
sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updateIndicator(tab, index)
    })
});

const swiper = new Swiper(".slider-container", {
    effect: "fade",
    speed: 1300,
    autoplay: {delay: 4000},
    on: {
        slideChange: () =>{
            const currentTabIndex =[...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
            updateIndicator(sliderTabs[swiper.activeIndex],currentTabIndex);
        }
    }
});
updateIndicator(sliderTabs[0], 0);
Window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], 0))