// -------------------Toggle Button----------------
//--------------------Dark light theme-------------
const  html=document.querySelector('html')
const themeBtn=document.getElementById('theme-toggle')
if(localStorage.getItem('mode')==="dark"){
    darkMode();
}else{
    lightMode();
}

themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem('mode')==="light"){
        darkMode();
    }else{
        lightMode();
    }
})
function darkMode(){
    html.classList.add('dark')
    themeBtn.classList.replace('ri-moon-line','ri-sun-line')
    localStorage.setItem('mode','dark')
}
function lightMode(){
    html.classList.remove('dark')
    themeBtn.classList.replace('ri-sun-line','ri-moon-line')
    localStorage.setItem('mode','light')
}

// -------------------Hamburger click---------------------

const hamburger=document.getElementById('hamburger')
const navMenu=document.getElementById('nav-menu')
const navClose=document.getElementById('nav-close')
const navLinks=document.querySelectorAll('.nav-link')



hamburger.addEventListener('click',()=>navMenu.classList.remove('hidden'))
navClose.addEventListener('click',()=>navMenu.classList.add('hidden'))

navLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
     navMenu.classList.add('hidden')
    })
});

// -------------------indicator------------------
const tabs=document.querySelectorAll('.tab')
const indicator=document.querySelector('.indicator')
const all=document.querySelectorAll('.work_card')
const uiuxs=document.querySelectorAll('.uiux')
const brandings=document.querySelectorAll('.branding')
const apps=document.querySelectorAll('.apps')



indicator.style.width=tabs[0].getBoundingClientRect().width+"px";
indicator.style.left=tabs[0].getBoundingClientRect().left-tabs[0].parentElement.getBoundingClientRect().left+"px";
tabs[0].classList.remove('text-whiteColor')
tabs[0].classList.add('text-whiteColor')

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        indicator.style.width=tab.getBoundingClientRect().width+"px";
        indicator.style.left=tab.getBoundingClientRect().left-tab.parentElement.getBoundingClientRect().left+"px";

        tabs.forEach(t=>t.classList.remove('text-whiteColor'))
        tab.classList.add('text-whiteColor')
        
        const tabVal=tab.getAttribute('data-tabs');
        all.forEach(card=>card.style.display='none')
        switch(tabVal){
            case 'branding': 
            brandings.forEach(card=>card.style.display='block')
            break;
            case 'uiux':
                uiuxs.forEach(card=>card.style.display='block')
                break;
            case 'apps':
                apps.forEach(card=>card.style.display='block')
                break;
            default: 
            all.forEach(card=>card.style.display='block')
            break;
        }
        
    })
})

