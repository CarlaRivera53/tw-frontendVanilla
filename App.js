import Layout from "./Layout.js";
import Home from "./Home.js";
import Detalles from "./Detalles.js";
import NotFound from "./NotFound.js";

//URL del API de C sharp
//const API_URL = 'http://localhost:5128/api/peliculas';
//URL del API de NodeJs
const API_URL = 'http://localhost:3000/api/peliculas';


//Componente pirncipal
const App = () =>{
    let contenido;
    //Obtine las partes del URL
    const { pathname, search } = document.location;
    const componente = pathname.split('.html')[0];
    //Obtiene los parametros
    const urlParams = new URLSearchParams(search);

    //Obtenemos la plantilla del sitio
    let layout = Layout();
    // Definimos las rutas de la aplicacion
    const routes = {
        '/': Home,
        '/index': Home,
        '/detalles:id': Detalles,
    };

    //Obtiene el contenido a mostrar
    urlParams.has('id') ? contenido = routes[`${componente}:id`] : contenido = routes[componente];
    // Regresa el contenido a mostrar al cliente
    return layout.replace('<Outlet />', contenido || NotFound);
};

export default App;
export { API_URL };