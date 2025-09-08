import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FastNews from "../../components/ui/landing/FastNews";

import Bandeira from "../../assets/images/bandeira.webp";

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
          <span>Sobre Iati - Pe</span>
        </h1>
        <section className="pb-5 lg:flex lg:gap-8">
          <article className="lg:w-3/4">
            <div className="md:float-left md:pe-5 mb-4 md:mb-2">
              <img
                src={Bandeira}
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
                className="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
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
            <div className="w-full h-[450px] mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.471945780817!2d-36.851809358430394!3d-9.042226814078335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707b16040b6eb6f%3A0x8c0d787d15d4dd53!2sIati%2C%20PE%2C%2055345-000!5e0!3m2!1spt-BR!2sbr!4v1757333951018!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </article>
          <FastNews />
        </section>
      </main>
      <Footer />
    </>
  );
};
