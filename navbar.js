const ham = document.querySelector(".ham");
const nav = document.querySelector(".nav");
const bar = document.querySelector(".bar1");
const desknav = document.querySelector(".navvan");
const dsnav = document.querySelector("dnav");
// const wbham = document.querySelector(".bham");
const wwham = document.querySelector(".ham");
ham.addEventListener("click", () => {
    nav.classList.toggle("open");
});
window.addEventListener("load", function(){
    style = window.getComputedStyle(ham),
    top = style.getPropertyValue('display');
    console.log(ham.style.display);
    if(ham.style.display == 'none')
    {
        desknav.classList = 'navvan dnav';
        console.log("display is null");
    }
    else
    {
        desknav.classList = 'navvan nav';
        console.log("wtf happenin");
    }
});

window.addEventListener("scroll", function() {
    if(window.pageYOffset > 100)
    {
        desknav.classList += ' dsnav';
        bar.classList += ' bar2';
        // wbham.classList += ' wham';
        wwham.classList = ' wham';
        // dsnav.style.color = rgb(192, 192, 192);

    }
    else
    {
        bar.classList =  'bar1';
        // wbham.classList = 'bham fas fa-bars';
        wwham.classList = 'ham';
        desknav.classList = 'navvan dnav';

    }
});