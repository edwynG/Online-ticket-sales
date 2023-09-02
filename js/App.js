'use strict';
import * as mdapp from './modulos/GenericComponent.js';
import * as animation from './modulos/animationApp.js'

animation.sliderScroll()
animation.toggleNavCar()
animation.menuDeplegable()

try {
    for (let index = 0; index < 16; index++) {
        document.getElementById('container_car-event').append(mdapp.GenericCarEvent())
        
    }
} catch (error) {
    
}

try {
    for (let index = 0; index < 16; index++) {
        animation.deplegarFunciones()
        
    }
} catch (error) {
    
}


