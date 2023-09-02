
// Crear la clase de componente
class navbar extends HTMLElement {
    constructor() {
        // Llamar al constructor de la clase base
        super();
        //this.name=null;
       
       
    }

    // static get observedAttributes(){
    //     return ['name'];
    // }

    // attributeChangedCallback(newAtr,old,newValue){
    //     switch (newAtr){
    //         case'name':
    //             this.name=newValue;
    //             break;

    //     }
    // }

  
    
    createNavBar(){
       // Create the header element
      const header = document.createElement("header");
      this.classList.add("navbar");
      this.id = "navbar-menu";

      // Create the ul element
      const ul = document.createElement("ul");
      ul.classList.add("nav_items");
      ul.id = "nav_items";

      // Create the li elements
      const li1 = document.createElement("li");
      li1.classList.add("nav-item");
      li1.id = "menu-deplegable";

      const li2 = document.createElement("li");
      li2.classList.add("nav-item");

      const li3 = document.createElement("li");
      li3.classList.add("nav-item");

      const li4 = document.createElement("li");
      li4.classList.add("nav-item");
      li4.id = "shopCar";

      const li5 = document.createElement("li");
      li5.classList.add("nav-item");
     

      // Create the img elements
      const img1 = document.createElement("img");
      img1.src = "/src/icons/menu-removebg.png";
      img1.alt = "Menu";

      const img2 = document.createElement("img");
      img2.src = "/src/icons/heart-removebg.png";
      img2.alt = "Favorite";

      const img3 = document.createElement("img");
      img3.src = "/src/icons/bell-removebg.png";
      img3.alt = "Notification";

      const img4 = document.createElement("img");
      img4.src = "/src/icons/shop-removebg.png";
      img4.alt = "Car";

      const img5 = document.createElement("img");
      img5.src = "/src/icons/user-removebg.png";
      img5.alt = "User";

      // Create the h3 elements
      const h3_1 = document.createElement("h3");
      h3_1.classList.add("nav-item-text");
      h3_1.innerText = "Menu";

      const h3_2 = document.createElement("h3");
      h3_2.classList.add("nav-item-text");
      h3_2.innerText = "Principal";

      const h3_3 = document.createElement("h3");
      h3_3.classList.add("nav-item-text");
      h3_3.innerText = "Notificaciones";

      const h3_4 = document.createElement("h3");
      h3_4.classList.add("nav-item-text");
      h3_4.innerText = "Carrito";

      const h3_5 = document.createElement("h3");
      h3_5.classList.add("nav-item-text");
      h3_5.innerText = "Usuario";

      // Append the elements together
      li1.appendChild(img1);
      li1.appendChild(h3_1);

      li2.appendChild(img2);
      li2.appendChild(h3_2);

      li2.onclick = ()=> window.open('/index.html','_self')

      li3.appendChild(img3);
      li3.appendChild(h3_3);

      li4.appendChild(img4);
      li4.appendChild(h3_4);

      li5.appendChild(img5);
      li5.appendChild(h3_5);

      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      ul.appendChild(li5);

      this.appendChild(ul);
     
    }
    connectedCallback(){
      this.createNavBar()
    }
  }

  
  
customElements.define('nav-bar', navbar);
