let btn_open = document.querySelector('.menu-burgue i');
let btn_close = document.querySelector('.menu-close');


    btn_open.addEventListener('click', function(e){
        e.preventDefault();

        this.classList.add('opacity-0');
        document.querySelector('.header__rowBottom__nav__menu').classList.add('menuOpen');
    });

    btn_close.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.header__rowBottom__nav__menu').classList.remove('menuOpen');
        btn_open.classList.remove('opacity-0');
    });