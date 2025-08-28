import { useState } from "react";
import News from "./components/News";
import Events from "./components/Events";

export default () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="relative header-main flex flex-col items-center justify-center font-bold text-white gap-5 sm:flex-row">
                <button
                    id="burger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="cursor-pointer absolute bottom-10 left-1/25 -translate-x-1/2 px-3 rounded-lg transition-colors border border-white/50 opacity-75 shadow-lg sm:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </button>

                <img
                    src="/icon.svg"
                    className="icon-formater"
                    alt="logotipo-camara"
                />
                <aside className="text-xl uppercase text-center">
                    <h1 className="text-2xl xl:text-5xl font-black">
                        Câmara municipal de vereadores
                    </h1>
                    <h2 className="xl:text-3xl">
                        casa pedro cesar de carvalho
                    </h2>
                    <h3 className="font-normal">IATI - pe</h3>
                </aside>
            </header>

            {menuOpen && (
                <aside className="fixed top-0 right-0 h-screen w-3/4 bg-gray-200 shadow-lg z-50 flex flex-col items-end gap-5 p-5 sm:hidden">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="self-end text-2xl font-bold cursor-pointer"
                    >
                        ✕
                    </button>
                    <ul className="flex flex-col text-end gap-2 text-lg font-medium">
                        <li>
                            <a href="#municipio">Municipio</a>
                        </li>
                        <li>
                            <a href="#camara">A Câmara</a>
                        </li>
                        <li>
                            <a href="#legislação">Legislação</a>
                        </li>
                        <li>
                            <a href="#vereadores">Vereadores</a>
                        </li>
                        <li>
                            <a href="#transparencia">Transparência pública</a>
                        </li>
                        <li>
                            <a href="#esic">e-SIC</a>
                        </li>
                        <li>
                            <a href="#ouvidoria">Ouvidoria</a>
                        </li>
                    </ul>
                </aside>
            )}

            <aside className="bg-gray-200 shadow-lg hidden p-5 sm:block">
                <ul className="flex items-center justify-center text-end gap-2 text-lg font-medium">
                    <li>
                        <a href="#municipio">Municipio</a>
                    </li>
                    <li>
                        <a href="#camara">A Câmara</a>
                    </li>
                    <li>
                        <a href="#legislação">Legislação</a>
                    </li>
                    <li>
                        <a href="#vereadores" className="hidden md:block">
                            Vereadores
                        </a>
                    </li>
                    <li>
                        <a href="#transparencia">Transparência pública</a>
                    </li>
                    <li>
                        <a href="#esic">e-SIC</a>
                    </li>
                    <li>
                        <a href="#ouvidoria">Ouvidoria</a>
                    </li>
                </ul>
            </aside>

            <nav className="container">
                <form method="get" className="py-5">
                    <div className="relative">
                        <label
                            htmlFor="searchInput"
                            className="absolute inset-y-0 left-2 grid w-8 place-content-center cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </label>
                        <input
                            type="text"
                            id="searchInput"
                            name="q"
                            required
                            placeholder="Digite o que precisa..."
                            className="w-full rounded-full border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </form>
            </nav>

            <main className="container">
                <News />
                <Events />
                <section>terceira seção vereadores</section>
            </main>
        </>
    );
};
