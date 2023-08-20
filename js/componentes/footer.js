
class Footer extends HTMLElement{
    constructor(){
        super();
    };

    
    connectedCallback(){
        this.classList.add('footer')
     
    }
}

customElements.define('Footer',Footer);