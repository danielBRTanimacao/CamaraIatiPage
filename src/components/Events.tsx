export default () => {
    return (
        <section className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((item) => (
                <div
                    key={item}
                    className="w-full rounded-2xl border-1 border-gray-300"
                >
                    <div
                        className="
                        rounded-[12px_12px_0_0] 
                        h-45 bg-no-repeat 
                        bg-cover 
                        bg-[url(https://passagenspromo.com.br/blog/wp-content/uploads/2019/06/pontos-turisticos-de-pernambuco-recife.jpg)]"
                    >
                        <div className="bg-white float-left m-3 py-1 px-3 text-center rounded-lg">
                            <h3 className="font-bold text-xl">2{item}</h3>
                            <p className="font-light opacity-50">Agosto</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <h3 className="text-xl font-extrabold">titulo sobre</h3>
                        <p className="pt-2">
                            <strong>Horario:</strong> 1{item}:00 - 1{item + 2}
                            :00
                        </p>
                        <p className="pb-2">
                            <strong>Local:</strong> Rua alguma coisa para teste
                        </p>
                        <div className="pb-4">
                            <a
                                href="#"
                                className="flex items-center gap-1 pb-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-person-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                <span>nome de um vereador</span>
                            </a>
                            <a
                                href="#agenda"
                                className="flex 
                                justify-center border 
                                border-gray-300 p-2 
                                rounded hover:border-gray-600 
                                hover:bg-gray-200"
                            >
                                Ver agenda
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
