import './Home.css'

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="hero">
        <div class="content">
            <h1>Daniel Yepes Carrillo</h1>
            <h4>Estudiante para Full Stack Developer</h4>
            <a href="./assets/mi curriculum vitae (4).pdf" target="_blank">
            <button>Descarga mi CV</button>
            </a>
                <div class="icons">
                    <a href="https://github.com/DaniYeCa" target="_blank"><img src="./assets/github.png" alt="logo github"></a>
                    <a href="https://www.linkedin.com/in/daniel-yepes-carrillo/" target="_blank"><img src="./assets/linkedin.png" alt="logo linkedin"></a>
                </div>
        </div>
                <div class="hero-image">
                    <img src="./assets/avatar.jpg" alt="Avatar" class="avatar">
                    <span><img src="./assets/html.png" alt="html"></span>
                    <span><img src="./assets/css-3.png" alt="css"></span>
                    <span><img src="./assets/javascript.png" alt="JavaScript"></span>
                </div>
    </section>
    `;
};