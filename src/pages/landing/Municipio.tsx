import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-5 text-2xl font-extrabold flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-calendar-week"
            viewBox="0 0 16 16"
          >
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          <span>Sobre Iati - Pe</span>
        </h1>
        <section className="pb-5 lg:flex">
          <article>
            <div className="md:float-left md:pe-5 mb-4 md:mb-2">
              <img
                src="https://camaraiati.pe.gov.br/v1/wp-content/uploads/2021/05/Pe-iati-bandeira.jpg"
                alt="Bandeira de Iati"
                className="w-full md:max-w-[300px] rounded-md shadow-md"
              />
            </div>

            <p>
              A região era primitivamente habitada por índios Carijós e Tupiniquins que denominavam
              o local de Iati, que quer dizer Casa Nova. Durante o século XVII muitos negros fugiram
              e refugiaram-se no interior de Pernambuco.
            </p>

            <p className="pt-4">
              No território onde hoje se localiza o município de Iati, então chamado de Açude Velho
              no Sítio Federação foi fundado um Mucambo. Em dialeto quibundo, a palavra refere-se a
              esconderijo, quilombo, choça. Também no século XVII os brancos apossaram-se da terra,
              afastando os negros e indígenas que lá habitavam.
            </p>

            <p className="pt-4">
              O distrito foi criado em 1 de junho de 1892 e denominava-se Mocambo, subordinado ao
              município de Águas Belas. Em 1938 o distrito passou a chamar-se de Iati. Em 26 de
              dezembro de 1963 foi desmembrado de Águas Belas, tornando-se município autônomo. Foi
              instalado em 14 de agosto de 1964.
            </p>

            <p className="pt-4">
              O Povoado de Quati hoje através de uma lei municipal chama-se Distrito Tancredo Neves.
              Publicado essa última informação hoje 30/05/2013 Em 2018 Iati ganhou renome nacional
              devido o jovem escritor, prata da casa, Erick Lins ter seu livro Animal Fusion entre
              os mais vendidos pela editora Clube do Autor.
            </p>
            <h2 className="py-5 text-xl font-extrabold flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-calendar-week"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span>Geografia</span>
            </h2>
            <p>
              O município encontra-se inserido no Planalto da Borborema, com relevo suave e
              ondulado, próprio desta unidade. A vegetação nativa é composta por Florestas
              Subcaducifólica e Caducifólica.
            </p>
            <p className="py-4">
              O município de Iati localiza-se nos domínios da Bacia Hidrográfica do Rio Ipanema e
              tem como principais tributários os rios Garanhuzinho, Quati e Dois Riachos, além dos
              riachos do Mandante, Baixo do Mocó, do Limitão, da Fora, da Grota, das Lajes, Grande,
              do Umbuzeiro, dos Porquinhos, do Sertão e Amaral Ferreira, todos de regime
              intermitente.
            </p>
          </article>
          <aside>Menu lateral</aside>
        </section>
      </main>
      <Footer />
    </>
  );
};
