# Web Design Demo Project 1
### This is a Web Design Demo project using HTML, CSS & JavaScript.
---

To Watch Video Click On Image:
[![Watch the video](https://user-images.githubusercontent.com/75246159/151648570-3e0bb63a-f25d-4a06-90d8-b969ab624435.PNG)](https://www.youtube.com/watch?v=28FwZHeXjR8)

**[Live Demo Here](https://modest-poincare-8685c1.netlify.app/)**

**It's from Figma [UI](https://www.figma.com/file/eRttu9aYFD4xqccpPi4w5e/)**

## My Working Process:
- Planing
- Markup
- Styling
- Responsive
- Some interactivity.

### Planing & Markup
- Define Header and Footer first.
- Hero Section
- Mark All Sections

### Styling
- Import Fonts
- Start from :root
- Define variables in root
- All color setup in variable so that I can change at any time & It’s helping me to implement dark mode
- Basic fonts configuration in the body tag
- Common useable classes define
- Then select all sections and children;

My Root Here for this project
``` css
:root{
    --primary-font: 'Inter', sans-serif;
    --primary-color-main: #06C167;
    --primary-color-dark: #048848;
    --secondary-color: #ff380b;
    --primary-color-light: #F3FCF7;
    --border-color: #70707015;
    --text-clor-main: #1D1D1F;
    --text-clor-light: #767675;
    --text-white: #fff;
    --site-width: 1170px;
    --backdrop-index: 250;
    --close-icon-index: 300;
    --header-sticky-index: 9999;
    --button-width: 100%;
}
```
Then When I try to dark mood then I change the variables values using JavaScript event listener
``` js
element.addEventListener('click', e => {
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
```

>> Note:
>> I cange background color without difine in rool. Excualy I use var(---body-color, #fff) in body tag. Thats why I able to change the variable in JS.

### Responsive:
I start CSS following google standards. First, I fixed small size device (Mobile) then for large devices;

``` css
/* sm	 */
@media (min-width: 640px) {}
/* md */
@media (min-width: 768px) {}
/* lg */
@media (min-width: 1024px) {}
/* xl */
@media (min-width: 1280px) {}
/* 2xl */
@media (min-width: 1536px) {}
```

