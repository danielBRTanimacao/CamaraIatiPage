import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import NewImage3 from '../assets/images/news/newImage2.webp';
import NewImage4 from '../assets/images/events/reunion.webp';
import NewImage5 from '../assets/images/events/pista.webp';
import NewImage6 from '../assets/images/events/barragem.webp';
import NewImage7 from '../assets/images/news/news3.webp';

import instaOficial from '../assets/images/news/instaOficial.webp';
import transparentOficial from '../assets/images/news/transparentOficial.webp';
import { useEffect, useState } from 'react';

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

  const API_KEY = import.meta.env.VITE_GNEW_API;
  const CACHE_KEY = 'gnews_cache_data';
  const CACHE_TIME_KEY = 'gnews_cache_time';
  const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTime: any | number | bigint = localStorage.getItem(CACHE_TIME_KEY);
      const now = new Date().getTime();

      if (cachedData && cachedTime && now - cachedTime < ONE_WEEK) {
        setSlideData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const targetUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=pt&country=br&max=10&apikey=${API_KEY}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;

        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Falha ao buscar dados');

        const proxyData = await response.json();
        const data = JSON.parse(proxyData.contents);
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

    if (API_KEY) fetchData();
  }, [API_KEY]);

  const newsIati = [
    {
      img: NewImage3,
      url: 'https://iati.pe.gov.br/concurso-publico-2025/',
      title: 'A Prefeitura Municipal de Iati, no compromisso de fortalecer...',
    },
    {
      img: NewImage7,
      url: '#',
      title: 'Falta de passagem dificulta locomoção e irrita moradores locais entenda...',
    },
    {
      img: NewImage4,
      url: '#',
      title: 'Reunião na Câmara: Vereadores debatem projeto de lei para o orçamento municipal.',
    },
    {
      img: NewImage5,
      url: '#',
      title:
        'Motocross na cidade: O melhor da região faz história e atrai pilotos e público de todo o país.',
    },
  ];

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
                <p className="bg-red-100 text-red-500 p-5 border-b-4">{errorLoad}</p>
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

        <a
          target="_blank"
          href="https://www.instagram.com/camaradeiati/"
          style={{ backgroundImage: `url(${instaOficial})` }}
          className="block h-40 w-full rounded-lg bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-105"
        ></a>
        <a
          target="_blank"
          href="https://tecnosolutions.inf.br/transparencia/iati/camara/"
          style={{ backgroundImage: `url(${transparentOficial})` }}
          className="block h-40 w-full rounded-lg bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-105"
        ></a>
      </section>

      <aside className="pt-5 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
        {newsIati.map((item, key) => (
          <a
            href={item.url}
            key={key}
            className={`
              w-full max-w-xs 
              ${key === 0 ? 'block' : 'hidden'} 
              ${key === 1 ? 'sm:block' : ''} 
              ${key === 2 ? 'md:block' : ''} 
              ${key === 3 ? 'md:block' : ''}
            `}
          >
            <img src={item.img} alt="img-noticia" className="w-full h-48 object-cover" />
            <p className="text-gray-500 pt-2 text-base leading-4">{item.title}</p>
          </a>
        ))}
      </aside>
    </>
  );
};
