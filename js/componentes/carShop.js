class Carshop extends HTMLElement{
    constructor(){
        super();
        this.createCar()
    };

    createCar(){
    
        this.classList.add('contenedor-shop-car');
        this.id = 'container-shop-car';

        const carOptionsAside = document.createElement('section');
        carOptionsAside.classList.add('car-options-aside');

        const asideItem1 = document.createElement('article');
        asideItem1.classList.add('aside-items', 'aside-item1');
        const closeAsideResponse = document.createElement('div');
        closeAsideResponse.classList.add('close_aside-resposive-icon');
        closeAsideResponse.id = 'close-aside-response';
        const xmark1 = document.createElement('i');
        xmark1.classList.add('fa-solid', 'fa-xmark');
        closeAsideResponse.appendChild(xmark1);
        const titleAside = document.createElement('h1');
        titleAside.classList.add('title-aside');
        titleAside.textContent = 'My Tickets';
        const dtPersonles = document.createElement('div');
        dtPersonles.classList.add('dt-personles');
        const person1 = document.createElement('div');
        person1.classList.add('person');
        const namePerson1 = document.createElement('h5');
        namePerson1.classList.add('name-person');
        namePerson1.textContent = 'Edwyn Guzman';
        const aboutPerson1 = document.createElement('h5');
        aboutPerson1.classList.add('aabout-person');
        aboutPerson1.textContent = '3032 La guaria Joseph,Venezuela La guaira';
        const contacPerson1 = document.createElement('h5');
        contacPerson1.classList.add('contac-person');
        contacPerson1.textContent = 'Edwynjesus30@gmail.com';
        person1.appendChild(namePerson1);
        person1.appendChild(aboutPerson1);
        person1.appendChild(contacPerson1);
        const userDirectionIcon = document.createElement('div');
        userDirectionIcon.classList.add('user-direction-icon');
        const angleRight = document.createElement('i');
        angleRight.classList.add('fa-solid', 'fa-angle-right');
        userDirectionIcon.appendChild(angleRight);
        dtPersonles.appendChild(person1);
        dtPersonles.appendChild(userDirectionIcon);
        asideItem1.appendChild(closeAsideResponse);
        asideItem1.appendChild(titleAside);
        asideItem1.appendChild(dtPersonles);

        const asideItem2 = document.createElement('article');
        asideItem2.classList.add('aside-items', 'aside-item2');
        const cantTicektSecion = document.createElement('div');
        cantTicektSecion.classList.add('cant-ticekt-secion');
        const secctionTicket1 = document.createElement('a');
        secctionTicket1.classList.add('secction-ticket');
        const secctionTicket2 = document.createElement('a');
        secctionTicket2.classList.add('secction-ticket');
        const secctionTicket3 = document.createElement('a');
        secctionTicket3.classList.add('secction-ticket');
        cantTicektSecion.appendChild(secctionTicket1);
        cantTicektSecion.appendChild(secctionTicket2);
        cantTicektSecion.appendChild(secctionTicket3);
        const ticketContainer = document.createElement('div');
        ticketContainer.classList.add('ticket-container');
        ticketContainer.setAttribute('id','ticketInCar')
        asideItem2.appendChild(cantTicektSecion);
        asideItem2.appendChild(ticketContainer);

        const asideItem3 = document.createElement('article');
        asideItem3.classList.add('aside-items', 'aside-item3');
        const facturaContianer = document.createElement('div');
        facturaContianer.classList.add('factura-contianer');
        const factureDtContaine1 = document.createElement('div');
        factureDtContaine1.classList.add('facture-dt-containe');
        const div1_1 = document.createElement('div');
        const factureDt1 = document.createElement('h4');
        factureDt1.classList.add('facture-dt');
        factureDt1.textContent = 'Sub Total';
        div1_1.appendChild(factureDt1);
        div1_1.innerHTML += ':';
        const span1 = document.createElement('span');
        span1.textContent = '$0.00';
        factureDtContaine1.appendChild(div1_1);
        factureDtContaine1.appendChild(span1);
        const factureDtContaine2 = document.createElement('div');
        factureDtContaine2.classList.add('facture-dt-containe');
        const div2_1 = document.createElement('div');
        const factureDt2 = document.createElement('h4');
        factureDt2.classList.add('facture-dt');
        factureDt2.textContent = 'Sub Total';
        div2_1.appendChild(factureDt2);
        div2_1.innerHTML += ':';
        const span2 = document.createElement('span');
        span2.textContent = '$0.00';
        factureDtContaine2.appendChild(div2_1);
        factureDtContaine2.appendChild(span2);
        const factureDtContaine3 = document.createElement('div');
        factureDtContaine3.classList.add('facture-dt-containe');
        const div3_1 = document.createElement('div');
        const factureDt3 = document.createElement('h4');
        factureDt3.classList.add('facture-dt');
        factureDt3.textContent = 'Sub Total';
        div3_1.appendChild(factureDt3);
        div3_1.innerHTML += ':';
        const span3 = document.createElement('span');
        span3.textContent = '$0.00';
        factureDtContaine3.appendChild(div3_1);
        factureDtContaine3.appendChild(span3);
        const factureDtContaine4 = document.createElement('div');
        factureDtContaine4.classList.add('facture-dt-containe');
        const div4_1 = document.createElement('div');
        const factureDt4 = document.createElement('h4');
        factureDt4.classList.add('facture-dt');
        factureDt4.textContent = 'Sub Total';
        div4_1.appendChild(factureDt4);
        div4_1.innerHTML += ':';
        const span4 = document.createElement('span');
        span4.textContent = '$0.00';
        factureDtContaine4.appendChild(div4_1);
        factureDtContaine4.appendChild(span4);
        const factureDtContaine5 = document.createElement('div');
        factureDtContaine5.classList.add('facture-dt-containe');
        const div5_1 = document.createElement('div');
        div5_1.classList.add('total-facture');
        const factureDt5 = document.createElement('h4');
        factureDt5.classList.add('facture-dt', 'facture-total');
        factureDt5.textContent = 'Total';
        div5_1.appendChild(factureDt5);
        div5_1.innerHTML += ':';
        const span5 = document.createElement('span');
        span5.textContent = '$0.00';
        factureDtContaine5.appendChild(div5_1);
        factureDtContaine5.appendChild(span5);
        facturaContianer.appendChild(factureDtContaine1);
        facturaContianer.appendChild(factureDtContaine2);
        facturaContianer.appendChild(factureDtContaine3);
        facturaContianer.appendChild(factureDtContaine4);
        facturaContianer.appendChild(factureDtContaine5);
        const btnCar = document.createElement('button');
        btnCar.name = 'btn-car';
        btnCar.id = 'btn-car_buy';
        btnCar.textContent = 'Comprar';
        asideItem3.appendChild(facturaContianer);
        asideItem3.appendChild(btnCar);

        carOptionsAside.appendChild(asideItem1);
        carOptionsAside.appendChild(asideItem2);
        carOptionsAside.appendChild(asideItem3);

        this.appendChild(carOptionsAside);
    }

    connectedCallback(){
       
     
    }
}

customElements.define('car-shop',Carshop);