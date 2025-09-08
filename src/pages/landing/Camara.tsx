import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FastNews from "../../components/ui/landing/FastNews";

import OutCamaraImage from "../../assets/images/front-camara.webp";
import CamaraImage from "../../assets/images/camara-bg.webp";

export default () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-5 text-2xl font-extrabold flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            fill="currentColor"
            className="bi bi-patch-question"
            viewBox="0 0 16 16"
          >
            <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
          </svg>
          <span>A Câmara</span>
        </h1>
        <section className="pb-5 lg:flex lg:gap-8">
          <article className="lg:w-3/4">
            <div className="lg:float-left md:pe-5 mb-4 md:mb-2">
              <img
                src={OutCamaraImage}
                alt="Fora-da-camara-imagem"
                className="w-full xl:max-w-[510px] rounded-sm shadow-md"
              />
            </div>

            <p>
              A Câmara Municipal, também chamada de Poder Legislativo Municipal, é um órgão
              legislativo e fiscalizador no Município. Ela é composta pelos vereadores que são os
              representantes da vontade popular.
            </p>

            <p className="pt-4">
              O governo municipal é exercido pelo prefeito (poder executivo) e pelos vereadores
              (poder legislativo). O legislativo é quem elabora as leis e estabelece o que o
              prefeito pode ou deve executar.
            </p>

            <p className="pt-4">
              É importante lembrar que executar é função privativa do prefeito, ou seja, cabe a ele
              desde que obedecendo à legislação, decidir onde, quando e como serão aplicados os
              recursos dos impostos. Aos vereadores cabe fiscalizar aprovando ou vetando as decisões
              do executivo que sejam ilegais ou que de não favoreçam a população.
            </p>

            <p className="pt-12 text-center italic font-bold">
              “O Legislativo e o Executivo são poderes independentes e harmônicos entre si.” (Art.
              2º da CF)
            </p>
            <h2 className="py-5 text-xl font-extrabold flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-archive"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
              </svg>
              <span>Funções da Câmara</span>
            </h2>

            <p>
              <strong>- Função Legislativa</strong>: Consiste em elaborar ou/e votar Leis de
              competência exclusiva do município. Como ex. temos: Elaboração das diretrizes
              orçamentárias, dos orçamentos anuais e dos planos plurianuais, ocupação do solo,
              proteção do patrimônio, etc.
            </p>
            <p className="py-4">
              <strong>- Função Fiscalizadora</strong>: Consiste em fiscalizar todos os atos do Poder
              Executivo, zelando pelo patrimônio público e pela boa aplicação dos recursos. A
              fiscalização também ocorre através de pedidos de informação aprovadas em Plenário.
            </p>
            <p className="pb-4">
              <strong>- Julgadora</strong>: Onde os vereadores devem julgar e votar as contas do
              Executivo; assessora – expressa por meio de indicações (sugestões) enviadas ao
              prefeito; administrativa – referente à sua organização interna.
            </p>
            <div className="w-full mb-8">
              <img src={CamaraImage} alt="dentro-da-camara-imagem" />
            </div>
          </article>
          <FastNews />
        </section>
      </main>
      <Footer />
    </>
  );
};
