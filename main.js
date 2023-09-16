import './style.css'


// constantes
import { Header } from './src/components/Header/Header'


// paginas
import { Home } from './src/pages/Home/Home'
import { AboutMe } from './src/pages/AboutMe/AboutMe'
import { Projects } from './src/pages/Projects/Projects';
// funcionalidades
import { linkpages } from './src/utils/linkpages'

document.querySelector('header').innerHTML = Header()

Home();

// ejecucion de links*
linkpages('#homelink', Home)
linkpages('#aboutmelink', AboutMe)
linkpages('#projectlink', Projects)