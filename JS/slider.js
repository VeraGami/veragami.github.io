(function(){

    const sliders =[...document.querySelectorAll('.menu__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

        buttonNext.addEventListener('click', ()=>{
            changePosition(1);
        });

        buttonBefore.addEventListener('click', ()=>{
            changePosition(-1);
        });

        const changePosition = (add)=>{
            const currentMenu = document.querySelector('.menu__body--show').dataset.id;
            value = Number(currentMenu);
            value+= add;

           
           sliders[Number(currentMenu)-1].classList.remove('menu__body--show');
            if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
            }

            sliders[value-1].classList.add('menu__body--show');


        }
})();