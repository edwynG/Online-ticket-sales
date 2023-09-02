'use strict'

const depurarNodoArray = (arr) =>{
    let list =  new Array();
    for (const nodo of arr) {
        list.push(nodo)
    }
    return list;
}
const sliderScroll = ()=>{
    try {
        let slider= depurarNodoArray(document.getElementById("slider-container").children)
        let btn = depurarNodoArray(document.getElementById('slider-selection').children)
        
        btn.forEach((element,i)=> {

        element.addEventListener('click',(e)=>{
            e.preventDefault()
            slider.forEach(element => element.classList.add('delete-slider'))
            slider.forEach(element=>{
                    element.style.transform=`translateX(-${i*100}%)`
                })
            setTimeout(() => slider.forEach(element => element.classList.remove('delete-slider')),10000)
        })
    })
    } catch (error) {
        console.log('Hubo un error')
    }
}

const menuDeplegable = ()=>{
    let btn = document.getElementById('menu-deplegable');
    let desplegar = document.getElementById('navbar-menu')
    let btnOptions = depurarNodoArray(document.getElementById("nav_items").children)

    btn.onclick= ()=> desplegar.classList.toggle('menu-desplegable')

    btnOptions.forEach((element,i)=>{
        if(i > 0){
            element.addEventListener('click', () => desplegar.classList.remove('menu-desplegable'))
        }
        
    })
}

const toggleNavCar = ()=>{
    let btn = document.getElementById('shopCar');
    let containerCar = document.getElementById('container-shop-car');
  
    btn.onclick = ()=>{
      containerCar.classList.toggle('delete-car-shop')
    }
  
    document.getElementById('close-aside-response').onclick= () => containerCar.classList.remove('delete-car-shop')
  
  }

const deplegarFunciones = ()=>{
    const btn = document.getElementById('mostrar-fuciones')
    const desplegar = document.getElementById('box-fuciones-Disponibles')
    btn.onclick = ()=>{
        btn.innerHTML=  btn.textContent == 'Quitar Funciones'?'Mostrar Funciones': 'Quitar Funciones';
        desplegar.classList.toggle('desplegar-fuciones')
       
    }
}


export{
    sliderScroll,
    menuDeplegable,
    toggleNavCar,
    depurarNodoArray,
    deplegarFunciones
}