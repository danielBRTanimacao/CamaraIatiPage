export default () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Agenda Oficial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Atlas das reuniões
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Pautas das reuniões
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Requerimentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Vereadores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  e-SIC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Glossário
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Mapa do site
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Ouvidoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum enim ex aliquid fugit
              numquam ab?
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Email: contato@suaempresa.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Telefone: (99) 99999-9999
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Endereço: R. Padre Nelson B Carvalho
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16h-2v-6h2v6zm6 0h-2v-6h2v6zm-4-11a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.34-1.6.57-2.46.66.89-.54 1.58-1.39 1.9-2.4-.84.5-1.78.86-2.77 1.05-.79-.84-1.92-1.37-3.17-1.37-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.11.99-3.62-.18-6.84-1.92-8.99-4.54-.37.64-.58 1.38-.58 2.16 0 1.51.77 2.84 1.94 3.61-.71 0-1.38-.21-1.96-.54v.05c0 2.1 1.49 3.86 3.47 4.25-.36.1-.73.15-1.11.15-.27 0-.53-.03-.79-.08.55 1.72 2.14 2.98 4.02 3.01-1.48 1.16-3.35 1.86-5.38 1.86-.35 0-.69-.02-1.03-.06 1.92 1.23 4.19 1.95 6.64 1.95 8 0 12.3-6.62 12.3-12.3 0-.19-.01-.38-.01-.57.85-.61 1.59-1.38 2.18-2.26z" />
                </svg>
              </a>
            </div>
            <h3 className="text-md font-semibold text-white mt-3">Feito por:</h3>
            <p>Daniel Tenório</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Câmara Iati. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
