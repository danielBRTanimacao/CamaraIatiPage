import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const inicialItens = [
  {
    id: 1,
    nome: 'História do Município',
    categoria: 'Institucional',
    url: 'https://camaraiati.pe.gov.br/municipio',
  },
  {
    id: 2,
    nome: 'Mesa Diretora',
    categoria: 'Câmara',
    url: 'http://103.199.185.123:8084/mesa-diretora/',
  },
  {
    id: 3,
    nome: 'Lista de Vereadores',
    categoria: 'Parlamentares',
    url: 'http://103.199.185.123:8084/parlamentar/',
  },
  {
    id: 4,
    nome: 'Folha de Pagamento',
    categoria: 'Transparência',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/receitas.faces',
  },
  {
    id: 5,
    nome: 'Licitações e Contratos',
    categoria: 'Transparência',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/licitacoesecontratos.faces',
  },
  {
    id: 6,
    nome: 'Leis Municipais',
    categoria: 'Legislativo',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/legislacaomunicipal.faces',
  },
  {
    id: 7,
    nome: 'Ordens do Dia',
    categoria: 'Legislativo',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/outrosatos.faces',
  },
  {
    id: 8,
    nome: 'Acompanhamento de Ações e Programas',
    categoria: 'Legislativo',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/acoes.faces',
  },
  {
    id: 9,
    nome: 'Atas de Registro de Preços',
    categoria: 'Transparência',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/atosoficiais.faces?tipo=ATAS%20DE%20REGISTRO%20DE%20PRE%C3%87OS',
  },
  {
    id: 10,
    nome: 'Glossário',
    categoria: 'Transparência',
    url: 'https://tecnosolutions.inf.br/transparencia/iati/camara/glossario.faces',
  },
];

export default () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const resultsSearch = inicialItens.filter(
    (item) =>
      item.nome.toLowerCase().includes(search.toLowerCase()) ||
      item.categoria.toLowerCase().includes(search.toLowerCase()),
  );

  const showResultsSearch = search.length > 0 && isFocused;

  return (
    <div className="container p-4">
      {showResultsSearch && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={() => setIsFocused(false)}
        />
      )}

      <div className="relative z-50">
        <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="absolute left-3 text-gray-400 pointer-events-none">
            <BiSearch size={20} />
          </div>

          <input
            type="text"
            placeholder="O que você procura?"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-md bg-white text-gray-700"
            value={search}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {showResultsSearch && (
          <div className="absolute w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
            <ul className="max-h-[400px] overflow-y-auto">
              {resultsSearch.length > 0 ? (
                resultsSearch.map((item) => (
                  <li key={item.id} className="border-b border-gray-50 last:border-none">
                    <a
                      href={item.url}
                      className="flex items-center justify-between p-4 hover:bg-green-50 transition-colors group"
                    >
                      <div>
                        <span className="block font-semibold text-gray-800 group-hover:text-green-700">
                          {item.nome}
                        </span>
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                          {item.categoria}
                        </span>
                      </div>
                      <div className="text-gray-300 group-hover:text-green-400">
                        <BiSearch size={16} />
                      </div>
                    </a>
                  </li>
                ))
              ) : (
                <li className="p-8 text-center">
                  <p className="text-gray-400 text-sm">Nenhum resultado encontrado para</p>
                  <p className="text-gray-600 font-bold">"{search}"</p>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
