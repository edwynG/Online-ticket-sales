
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
        let nav = document.createElement("nav");
        nav.setAttribute("class", "navbar navbar-light bg-transparent");

        let div = document.createElement("div");
        div.setAttribute("class", "container-fluid");

        let a = document.createElement("a");
        a.setAttribute("class", "navbar-brand");
        a.setAttribute("href", "#");

        let img = document.createElement("img");
        img.setAttribute("src", "./src/icono_teatro.png");
        img.setAttribute("title", "Teatro");
        img.setAttribute("width", "30");
        img.setAttribute("height", "24");
        img.setAttribute("class", "d-inline-block align-text-top");
        a.appendChild(img);

        let texto = document.createTextNode("Teatro");
        a.appendChild(texto);

        div.appendChild(a);
        div.innerHTML+=`
        
  <div class=" navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
      `
      

        nav.appendChild(div);

        
        return nav;
    }
    connectedCallback(){
       // this.appendChild(this.createNavBar());
    }
  }

  
  
customElements.define('nav-bar', navbar);
