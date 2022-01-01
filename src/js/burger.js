const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuList = document.querySelector('.menu__list');
    iconMenu.addEventListener('click', function(){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('active');
        menuList.classList.toggle('active');
    });
}
    