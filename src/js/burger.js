const menuBtn = document.querySelector('.header-burger');
const menuBody = document.querySelector('.header-body');
if (menuBtn){
    menuBtn.addEventListener("click", function(e){
        document.body.classList.toggle("_lock");
        menuBtn.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    })
}
