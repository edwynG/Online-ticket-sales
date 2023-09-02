'use strict';
import * as connectin from './connectinAPI.js';
import { depurarNodoArray }  from './animationApp.js'; 


function addTicketCar(){
           console.log('add ticket');
           document.getElementById('ticketInCar').appendChild(GenericTicketInCar())
}

function deleteTicketCar(e){
    console.log('Delete Ticket')
    e.parentNode.remove()
}

function GenericCarEvent(){
    const article = document.createElement("article");
    article.classList.add("car-fuction");

    const div1 = document.createElement("div");
    div1.classList.add("car-fuction-items-img");
    // Add image element to div1

    const div2 = document.createElement("div");
    div2.classList.add("car-fuction-items");

    const div3 = document.createElement("div");
    div3.classList.add("dt-event");

    const h3 = document.createElement("h3");
    h3.classList.add("title-event");
    h3.textContent = "Rick and morty";

    const h4 = document.createElement("h4");
    h4.classList.add("cine-event");
    h4.textContent = "Drama-Comedia";

    const h2 = document.createElement("h2");
    h2.classList.add("precio-event");
    h2.textContent = "$0.00";

    div3.appendChild(h3);
    div3.appendChild(h4);
    div3.appendChild(h2);

    const div4 = document.createElement("div");
    div4.classList.add("container-icon-buy");
    div4.onclick = () => window.open('/html/funciones.html','_self')

    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-calendar-days", "shop-buy-icon");

    div4.appendChild(i);

    div2.appendChild(div3);
    div2.appendChild(div4);

    article.appendChild(div1);
    article.appendChild(div2);


    return article;
}

function GenericTicketInCar(id=null) {
    const ticketShopContainer = document.createElement('article');
    ticketShopContainer.classList.add('ticket-shop-container');
    ticketShopContainer.setAttribute('id',`${id}`)

    const deleteTicket = document.createElement('div');
    deleteTicket.classList.add('delete-ticket-c');
    const xmark = document.createElement('i');
    xmark.classList.add('fa-solid', 'fa-xmark');
    deleteTicket.appendChild(xmark);

    deleteTicket.onclick= (e)=> deleteTicketCar(e.currentTarget)

    const ticketImg = document.createElement('div');
    ticketImg.classList.add('ticket-img');

    const ticketObservaciones = document.createElement('div');
    ticketObservaciones.classList.add('ticket-observaciones');

    const ticketDt = document.createElement('div');
    ticketDt.classList.add('ticket-dt');
    const nameObra = document.createElement('h4');
    nameObra.classList.add('name-obra');
    nameObra.textContent = 'The tick And Morty';
    const ticketFecha = document.createElement('h5');
    ticketFecha.classList.add('ticket-fecha');
    const fechaLg = document.createElement('span');
    fechaLg.classList.add('fecha-lg');
    const fechaUn = document.createElement('span');
    fechaUn.classList.add('fecha-un');
    fechaUn.textContent = '25/06/2023 6pm';
    ticketFecha.appendChild(fechaLg);
    ticketFecha.appendChild(fechaUn);
    ticketDt.appendChild(nameObra);
    ticketDt.appendChild(ticketFecha);

    const ticketCantPre = document.createElement('div');
    ticketCantPre.classList.add('ticket-cant-pre');
    const cantidadBoletos = document.createElement('h5');
    cantidadBoletos.classList.add('cantidad-boltetos');
    const cantSustraccion = document.createElement('span');
    cantSustraccion.classList.add('cant-sustracion');
    cantSustraccion.textContent = '-';
    const ticketUn = document.createElement('span');
    ticketUn.classList.add('ticket-un');
    ticketUn.textContent = '01';
    const cantAdicion = document.createElement('span');
    cantAdicion.classList.add('cant-adicion');
    cantAdicion.textContent = '+';
    cantidadBoletos.appendChild(cantSustraccion);
    cantidadBoletos.appendChild(ticketUn);
    cantidadBoletos.appendChild(cantAdicion);
    const ticketCantPrecio = document.createElement('h3');
    ticketCantPrecio.classList.add('ticket-cant-precio');
    ticketCantPrecio.textContent = '$10.00';
    ticketCantPre.appendChild(cantidadBoletos);
    ticketCantPre.appendChild(ticketCantPrecio);

    ticketObservaciones.appendChild(ticketDt);
    ticketObservaciones.appendChild(ticketCantPre);

    ticketShopContainer.appendChild(deleteTicket);
    ticketShopContainer.appendChild(ticketImg);
    ticketShopContainer.appendChild(ticketObservaciones);
    
    return ticketShopContainer

}

export{
    GenericCarEvent,
    addTicketCar
}