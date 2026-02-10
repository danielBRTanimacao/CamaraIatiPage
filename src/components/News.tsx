import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import {
  BsInstagram,
  BsCash,
  BsBook,
  BsPeople,
  BsFileEarmarkText,
  BsCashStack,
  BsInfo,
  BsFileArrowDown,
  BsBarChart,
} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import NewsAside from './ui/news/NewsAside';

interface SlidesInterface {
  image: string;
  url: string;
  title: string;
  description: string;
}

export default () => {
  const [slidesData, setSlideData] = useState<SlidesInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLoad, setErrorLoad] = useState('');

  const CACHE_KEY = 'gnews_cache_data';
  const CACHE_TIME_KEY = 'gnews_cache_time';
  const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
  //const BACKEND_URL = 'http://localhost:8000/api/gnews';
  const BACKEND_URL = 'https://camaraiati.pe.gov.br/api/gnews';

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
      const now = new Date().getTime();

      if (cachedData && cachedTime && now - Number(cachedTime) < ONE_WEEK) {
        setSlideData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) throw new Error();

        const data = await response.json();
        const articles = data.articles || [];

        localStorage.setItem(CACHE_KEY, JSON.stringify(articles));
        localStorage.setItem(CACHE_TIME_KEY, now.toString());

        setSlideData(articles);
        setErrorLoad('');
      } catch (error) {
        setErrorLoad('Erro ao carregar notícias externas');
        if (cachedData) setSlideData(JSON.parse(cachedData));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="pb-5 text-2xl font-extrabold flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-newspaper"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
          <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
        </svg>
        <span>Principais Noticias</span>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="relative row-span-2 overflow-hidden rounded-lg">
          {loading ? (
            errorLoad ? (
              <div className="flex justify-center items-center h-64">
                <p className="bg-red-100 text-red-500 p-5 border-b-4 text-center">{errorLoad}</p>
              </div>
            ) : (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
              </div>
            )
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={slidesData.length > 1}
              pagination={{ clickable: true }}
              className="h-[25rem]"
            >
              {slidesData.map((item, index) => (
                <SwiperSlide key={index} className="relative group overflow-hidden">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.image}
                      className="w-full h-[25rem] object-cover"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                      <h2 className="text-xl md:text-2xl font-bold leading-tight line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-200 mt-2 line-clamp-2">{item.description}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </article>

        <div className="flex flex-row flex-wrap gap-3 h-full content-start pt-2">
          {[
            {
              label: 'Instagram oficial',
              href: 'https://www.instagram.com/camaradeiati/',
              icon: <BsInstagram size={24} />,
            },
            {
              label: 'Receitas',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/receitas.faces',
              icon: <BsCash size={24} />,
            },
            {
              label: 'Despesas',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/despesas.faces',
              icon: <BsCashStack size={24} />,
            },
            {
              label: 'Glossário',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/glossario.faces',
              icon: <BsBook size={24} />,
            },
            {
              label: 'Quadro dos servidores',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/quadrofuncional.faces',
              icon: <BsPeople size={24} />,
            },
            {
              label: 'Contratos',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/licitacoesecontratos.faces',
              icon: <BsFileEarmarkText size={24} />,
            },
            {
              label: 'Normativos',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/atosnormativos.faces',
              icon: <BsFileArrowDown size={24} />,
            },
            {
              label: 'Solicitar informações',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/solicitacao.faces',
              icon: <BsInfo size={24} />,
            },
            {
              label: 'Estatisticas',
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/estatisticas.faces',
              icon: <BsBarChart size={24} />,
            },
          ].map((link, index) => (
            <a
              key={index}
              target="_blank"
              href={link.href}
              rel="noopener noreferrer"
              className="flex-grow basis-[calc(33.333%-12px)] min-w-[120px] h-30 rounded-lg bg-green-700 hover:bg-green-800 transition-all duration-500 ease-in-out hover:scale-105 shadow-md flex flex-col items-center justify-center text-white font-bold text-center p-2 text-xs sm:text-sm gap-2"
            >
              <div>{link.icon}</div>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
      <NewsAside />
    </>
  );
};
