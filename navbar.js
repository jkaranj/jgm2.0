const ham = document.querySelector(".ham");
const nav = document.querySelector(".nav");
const bar = document.querySelector(".bar1");
const desknav = document.querySelector(".navvan");
const dsnav = document.querySelector("dnav");
// const wwham = document.querySelector(".ham");

// -------for mobile view-change color of hamberger-------

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
    {
        bar.classList += ' bar2';
        ham.classList = ' wham';
    }
    else
    {
        bar.classList =  'bar1';
        ham.classList = 'ham';
    }
});


//--------mobile view opening navbar doc----------
ham.addEventListener("click", () => {
    nav.classList.toggle("open");
});


//-----------mobile to desktop view for navbar-----------
const valueeee = getComputedStyle(ham);
window.addEventListener("load", () => {
    if(ham.style.display === 'none')
    {
        desknav.classList = 'navvan dnav';
        console.log("display is null");
        console.log(valueeee.display);
    }
    else if(valueeee.display ==="block")
    {
        desknav.classList = 'navvan nav';
        console.log("display not null");
        console.log(valueeee.display);
    }
});

//---------desktop view navbar color change-------------
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100 && valueeee.display !== "block")
    {
        desknav.classList += ' dsnav';
    }
    if(window.pageYOffset <= 100 && valueeee.display!== "block")
    {
        desknav.classList = 'navvan dnav';
    }
});

