// Selectors
const header = document.querySelector('#main-header');
const themeSwithcBtn = document.querySelector('#themeSwitch');


document.addEventListener('scroll', e => {
    const mySrollSize = e.target.scrollingElement.scrollTop;
    if(mySrollSize >= 150){
        if(header.getAttribute('class')){
            header.classList.add("sticky")
        } else{
            header.setAttribute("class", "sticky");
        }
    }else {
        if(header.getAttribute('class')){
            header.classList.remove("sticky")
        }
    }
})

themeSwithcBtn.addEventListener('click', e => {
   if (e.target.innerText === "Dark") {
        e.target.innerText = "Light";
        document.documentElement.style.setProperty('--body-clolor', "#333");
        document.documentElement.style.setProperty('--primary-color-light', "#101010");
        document.documentElement.style.setProperty('--border-color', "#fff");
        document.documentElement.style.setProperty('--text-clor-main', "#fff");
        document.documentElement.style.setProperty('--text-clor-light', "#fff");
        document.documentElement.style.setProperty('--text-white', "#333");
        document.documentElement.style.setProperty('--header-after-opacity', "0.4");
   } else{
        e.target.innerText = "Dark"
        document.documentElement.style.setProperty('--body-clolor', "#fff");
        document.documentElement.style.setProperty('--primary-color-light', "#F3FCF7");
        document.documentElement.style.setProperty('--border-color', "#70707015");
        document.documentElement.style.setProperty('--text-clor-main', "#1D1D1F");
        document.documentElement.style.setProperty('--text-clor-light', "#767675");
        document.documentElement.style.setProperty('--text-white', "#fff");
        document.documentElement.style.setProperty('--header-after-opacity', "1");
   }
})
