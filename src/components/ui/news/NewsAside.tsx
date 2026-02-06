import { useEffect, useState } from 'react';

interface NewsInterface {
  img: string;
  url: string;
  title: string;
}

export default () => {
  const [newsIati, setNewsIati] = useState<NewsInterface[]>([]);
  //const API_IATI = 'http://localhost:8000/api/news';
  const API_IATI = 'https://camaraiati.pe.gov.br/api/news';
  const [loadingNews, setLoadingNews] = useState(true);
  const [errorLoadNews, setErrorLoadNews] = useState('');

  useEffect(() => {
    const fetchNewsIati = async () => {
      try {
        setLoadingNews(true);
        const response = await fetch(API_IATI);

        if (!response.ok) throw new Error('Erro ao carregar notícias de Iati');

        const data = await response.json();

        setNewsIati(data.slice(0, 4));
      } catch (error: any) {
        setErrorLoadNews(error.message);
        console.error(error);
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNewsIati();
  }, []);

  return (
    <aside className="pt-10 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
      {loadingNews ? (
        <div className="col-span-full flex justify-center items-center h-64 w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : errorLoadNews ? (
        <div className="col-span-full flex justify-center items-center h-18 w-full">
          <p className="bg-red-100 text-red-500 p-5 border-b-4">{errorLoadNews}</p>
        </div>
      ) : newsIati.length > 0 ? (
        newsIati.map((item, key) => (
          <a href={item.url} key={key} className="w-full group overflow-hidden">
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt="Imagem noticia"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-700 font-medium pt-3 text-sm leading-snug line-clamp-3 group-hover:text-green-700">
              {item.title}
            </p>
          </a>
        ))
      ) : (
        <div className="col-span-full py-10 text-gray-400 italic">
          Nenhuma notícia local encontrada no momento.
        </div>
      )}
    </aside>
  );
};
