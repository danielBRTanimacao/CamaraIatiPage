import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const inicialItens = [
  { id: 1, nome: 'Java Web Avançado' },
  { id: 2, nome: 'React + Tailwind' },
  { id: 3, nome: 'Spring Boot Microservices' },
  { id: 4, nome: 'Docker para Devs' },
];

export default () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const resultsSearch = inicialItens.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase()),
  );

  const showResultsSearch = search.length > 0 && isFocused;

  return (
    <div className="container">
      {showResultsSearch && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsFocused(false)} />
      )}

      <div className={`relative z-50`}>
        <form className="relative flex items-center">
          <div className="absolute left-3 pt-0.5 text-gray-400 pointer-events-none">
            <BiSearch size={20} />
          </div>

          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-lg bg-white"
            value={search}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {showResultsSearch && (
          <div className="absolute w-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
            <ul className="max-h-60 overflow-y-auto">
              {resultsSearch.length > 0 ? (
                resultsSearch.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-none transition-colors"
                  >
                    <p className="font-medium text-gray-800">{item.nome}</p>
                  </li>
                ))
              ) : (
                <li className="p-4 text-gray-500 text-center">Nenhum resultado para "{search}"</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
