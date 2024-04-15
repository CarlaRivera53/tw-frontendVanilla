// Componente donde esta nuestro código
import App from "./App.js";

// Enviamos el componente al archivo index.html
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('root').innerHTML = App();
});