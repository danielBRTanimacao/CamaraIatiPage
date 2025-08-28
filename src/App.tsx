import { useState } from "react";

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
                    <h1 className="text-2xl font-black">
                        Câmara municipal de vereadores
                    </h1>
                    <h2>casa pedro cesar de carvalho</h2>
                    <h3 className="font-normal">IATI - pe</h3>
                </aside>
            </header>

            {menuOpen && (
                <aside className="fixed top-0 right-0 h-screen w-3/4 bg-gray-200 shadow-lg z-50 flex flex-col items-end gap-5 p-5 sm:hidden">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="self-end text-2xl font-bold"
                    >
                        ✕
                    </button>
                    <ul className="flex flex-col text-end gap-2 text-lg font-medium">
                        <li>Municipio</li>
                        <li>A Câmara</li>
                        <li>Legislação</li>
                        <li>Vereadores</li>
                        <li>Transparência pública</li>
                        <li>e-SIC</li>
                        <li>Ouvidoria</li>
                    </ul>
                </aside>
            )}

            <nav>
                <form method="get" className="px-5">
                    <div className="relative">
                        <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                            <button
                                type="button"
                                aria-label="Submit"
                                className="rounded-full p-1.5 text-gray-700 transition-colors cursor-pointer hover:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={"1.5"}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="text"
                            id="searchInput"
                            name="q"
                            required
                            placeholder="Digite o que precisa..."
                            className="mt-0.5 w-full rounded border-gray-900 p-3 shadow-sm sm:text-sm"
                        />
                    </div>
                </form>
            </nav>

            <main>
                conteudo principal
                <section>primeira seção noticias</section>
                <section>segunda seção eventos</section>
                <section>terceira seção vereadores</section>
            </main>
        </>
    );
};
