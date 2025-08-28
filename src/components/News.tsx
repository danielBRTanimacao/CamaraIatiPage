export default () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="row-span-2">
                <img
                    src="https://images.myguide-cdn.com/recife/blog/top-6-beaches-in-pernambuco/large/top-6-beaches-in-pernambuco-287290.jpg"
                    className="w-full h-[25rem] object-cover"
                />
            </article>

            <div className="bg-[url(https://passagenspromo.com.br/blog/wp-content/uploads/2019/06/pontos-turisticos-de-pernambuco-recife.jpg)] cursor-pointer h-40 w-full rounded-lg bg-cover bg-center hover:bg-size-[auto_25rem]"></div>

            <div className="bg-[url(https://www.maladeaventuras.com/wp-content/uploads/2024/08/recife.jpg)] cursor-pointer h-40 w-full rounded-lg bg-cover bg-center  hover:bg-size-[auto_25rem]"></div>
        </section>
    );
};
