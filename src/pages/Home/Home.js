import './Home.css'

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="hero">
        <div class="content">
            <h1>Daniel Yepes Carrillo</h1>
            <h4>Estudiante para Full Stack Developer</h4>
            <a href="public/assets/full stack.pdf" target="_blank">
            <button>Descarga mi CV</button>
            </a>
                <div class="icons">
                    <a href="https://github.com/DaniYeCa" target="_blank"><img src="public/assets/github.png" alt="logo github"></a>
                    <a href="https://www.linkedin.com/in/daniel-yepes-carrillo/" target="_blank"><img src="public/assets/linkedin.png" alt="logo linkedin"></a>
                </div>
        </div>
                <div class="hero-image">
                    <img src="public/assets/avatar.jpg" alt="Avatar" class="avatar">
                    <span><img src="public/assets/html.png" alt=""></span>
                    <span><img src="public/assets/css-3.png" alt=""></span>
                    <span><img src="public/assets/javascript.png" alt=""></span>
                </div>
    </section>
    `;
};