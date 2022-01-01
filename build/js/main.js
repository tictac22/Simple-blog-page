function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();;
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuList = document.querySelector('.menu__list');
    iconMenu.addEventListener('click', function(){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('active');
        menuList.classList.toggle('active');
    });
}
    ;
