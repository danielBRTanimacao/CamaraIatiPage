import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

interface Councilor {
  id: number;
  nome_parlamentar: string;
  fotografia: string;
  partido: string;
}

export default () => {
  const [councilors, setCouncilors] = useState<Councilor[]>([]);
  const [errorLoad, setErrorLoad] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/parlamentares/legislatura/1/parlamentares/?get_all=true`,
        );
        if (!response.ok) throw new Error('Falha ao buscar dados');
        const data = await response.json();
        setCouncilors(data);
        setErrorLoad('');
      } catch (error) {
        setErrorLoad('Erro ao carregar os vereadores. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-10">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-800 uppercase tracking-tighter">
            Nossos Vereadores
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-2"></div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : errorLoad ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center font-bold">
            {errorLoad}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {councilors.map((councilor) => (
              <a
                key={councilor.id}
                href={`http://103.199.185.123:8084/parlamentar/${councilor.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                  <img
                    src={councilor.fotografia}
                    alt={councilor.nome_parlamentar}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) =>
                      (e.currentTarget.src = 'https://via.placeholder.com/150x200?text=Erro+Imagem')
                    }
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {councilor.nome_parlamentar}
                  </h2>
                  <p className="text-xs text-gray-500 font-medium mt-1 uppercase">
                    {councilor.partido}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
      <div className="mb-5"></div>
      <Footer />
    </div>
  );
};
