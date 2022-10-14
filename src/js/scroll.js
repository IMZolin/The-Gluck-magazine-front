const menuLinks = document.querySelectorAll('.nav-links [data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    // eslint-disable-next-line no-inner-declarations
    function onMenuLinkClick(e)
    {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto))
        {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlcokValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
            // eslint-disable-next-line no-undef
            if(menuBtn.classList.contains("_active"))
            {
                document.body.classList.remove("_lock");
                // eslint-disable-next-line no-undef
                menuBtn.classList.remove("_active");
                // eslint-disable-next-line no-undef
                menuBody.classList.remove("_active");
            }
            window.scrollTo({
                top: gotoBlcokValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
    }
}

