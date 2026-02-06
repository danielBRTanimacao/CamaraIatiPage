import { useEffect, useState } from 'react';

interface ContentInterface {
  title: string;
  day?: string;
  year?: string;
  img: string;
  url?: string;
}

export default () => {
  const [activeRemove, setActiveRemove] = useState(false);

  const [news, setNews] = useState<ContentInterface[]>([]);
  const [events, setEvents] = useState<ContentInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:8000/api';
  //const API_URL = 'https://camaraiati.pe.gov.br/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [resNews, resEvents] = await Promise.all([
          fetch(`${API_URL}/news`),
          fetch(`${API_URL}/events`),
        ]);

        const dataNews = await resNews.json();
        const dataEvents = await resEvents.json();

        setNews(dataNews);
        setEvents(dataEvents);
      } catch (error) {
        console.error('Erro ao buscar dados administrativos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 flex flex-col items-center justify-center font-bold text-white py-10 gap-5 sm:flex-row">
        <img src="/icon.png" className="w-20" alt="logotipo-camara" />
        <aside className="text-center sm:text-left">
          <h1 className="text-2xl xl:text-4xl font-black uppercase leading-none">
            Câmara municipal de vereadores
          </h1>
          <h2 className="xl:text-2xl opacity-80">Área administrativa</h2>
          <h3 className="font-normal uppercase tracking-widest text-sm">Iati - PE</h3>
        </aside>
      </header>

      <nav className="flex items-center justify-center gap-5 h-20 mb-3 bg-white shadow-sm">
        <a href="/" className="text-blue-600 hover:underline font-semibold">
          Voltar
        </a>
        <button
          onClick={() => setActiveRemove(!activeRemove)}
          className={`cursor-pointer px-6 py-2 rounded-full font-bold transition-all ${activeRemove ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {activeRemove ? 'Cancelar Remoção' : 'Modo Remover'}
        </button>
      </nav>

      <main className="container mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-bold animate-pulse">
            Carregando painel de controle...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
              <h2 className="text-2xl font-black mb-5 border-l-4 border-blue-600 pl-3 text-gray-800">
                Gerenciar Eventos
                <button className="ms-2 text-sm cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all">
                  + Adicionar Evento
                </button>
              </h2>

              <ul className="flex flex-col gap-3">
                {events.map((ev, idx) => (
                  <li
                    key={idx}
                    className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800 leading-tight">{ev.title}</span>
                      <span className="text-xs text-gray-500">
                        {ev.day} / {ev.year}
                      </span>
                    </div>
                    {activeRemove && (
                      <button className="cursor-pointer bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs font-black hover:bg-red-600 hover:text-white transition-all uppercase">
                        Excluir
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-5 border-l-4 border-green-600 pl-3 text-gray-800">
                Gerenciar Notícias
                <button className="ms-2 text-sm cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all">
                  + Adicionar Noticia
                </button>
              </h2>
              <ul className="flex flex-col gap-3">
                {news.map((nw, idx) => (
                  <li
                    key={idx}
                    className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800 leading-tight line-clamp-1">
                        {nw.title}
                      </span>
                      <span className="text-xs text-gray-400 italic">ID: {idx}</span>
                    </div>
                    {activeRemove && (
                      <button className="cursor-pointer bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs font-black hover:bg-red-600 hover:text-white transition-all uppercase">
                        Excluir
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};
