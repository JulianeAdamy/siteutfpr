export default function Courses() {
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-black text-center">
                <h2 id="cursos">
                    CONHEÇA NOSSOS <span>CURSOS</span>
                </h2>
            </div>
            <div className="bg-[#000000] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img className="hover:scale-105" src="https://github.com/JulianeAdamy/siteutfpr/assets/86632678/e19f8ca6-62ff-41c9-a22a-3755dc87b2ef" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de HTML</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#000000] rounded-md pb-2">
                <a href="/curso_css.html">
                    <img src="https://github.com/JulianeAdamy/siteutfpr/assets/86632678/62b56b62-bcd2-4512-9d4c-e649f0bc9138" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de CSS</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#000000] rounded-md pb-2">
                <a href="/curso_js.html">
                    <img src="https://github.com/JulianeAdamy/siteutfpr/assets/86632678/24fdb27c-365e-4235-99ca-d5cc20f5ec4c" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de JS</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#000000] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="https://github.com/JulianeAdamy/siteutfpr/assets/86632678/ace9daec-e5af-4d7e-9fe8-2034a48283b7" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de DESIGN</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#000000] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="https://github.com/JulianeAdamy/siteutfpr/assets/86632678/5e54835a-152c-4067-b4c6-9c16a1b238d5" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de GAMES</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#000000] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="https://github.com/JulianeAdamy/siteutfpr/assets/86632678/05feca88-5283-415e-aac6-5ba20b209c76" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de ROBÓTICA</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
        </main>

    )
}