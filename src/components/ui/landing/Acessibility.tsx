import { useState, useEffect } from 'react';
import {
  FaUniversalAccess,
  FaTimes,
  FaPlus,
  FaMinus,
  FaAdjust,
  FaPalette,
  FaUndo,
} from 'react-icons/fa';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility');
    if (saved) {
      const data = JSON.parse(saved);
      setFontSize(data.fontSize);
      setHighContrast(data.highContrast);
      setGrayscale(data.grayscale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    const filters = [];
    if (highContrast) {
      filters.push('contrast(180%) brightness(120%)');
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
    if (grayscale) filters.push('grayscale(100%)');
    document.body.style.filter = filters.join(' ');
  }, [highContrast, grayscale]);

  useEffect(() => {
    localStorage.setItem('accessibility', JSON.stringify({ fontSize, highContrast, grayscale }));
  }, [fontSize, highContrast, grayscale]);

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu de Acessibilidade"
        className={`cursor-pointer fixed top-6 left-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-2xl shadow-xl transition-all duration-300 active:scale-95 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-indigo-600 hover:bg-indigo-700'
        } text-white`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaUniversalAccess size={28} />}
      </button>

      <div
        className={`fixed top-24 left-6 z-[10000] w-72 p-5 rounded-3xl shadow-2xl transition-all duration-300 origin-top-left border border-white/20 bg-white/80 backdrop-blur-xl ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200/50">
          <span className="font-bold text-gray-800 text-lg">Acessibilidade</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setFontSize((prev) => Math.min(prev + 10, 200))}
            className="cursor-pointer group flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-indigo-50 transition-all border border-gray-100 hover:border-indigo-200 text-gray-700"
          >
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 group-hover:scale-110 transition-transform">
              <FaPlus size={12} />
            </div>
            <span className="font-semibold">Aumentar Texto</span>
          </button>

          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 10, 70))}
            className="cursor-pointer group flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-indigo-50 transition-all border border-gray-100 hover:border-indigo-200 text-gray-700"
          >
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 group-hover:scale-110 transition-transform">
              <FaMinus size={12} />
            </div>
            <span className="font-semibold">Diminuir Texto</span>
          </button>

          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all border ${
              highContrast
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-inner'
                : 'bg-white/50 text-gray-700 border-gray-100 hover:border-indigo-200'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${highContrast ? 'bg-indigo-400' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaAdjust size={12} />
            </div>
            <span className="font-semibold">Alto Contraste</span>
          </button>

          <button
            onClick={() => setGrayscale(!grayscale)}
            className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all border ${
              grayscale
                ? 'bg-gray-800 text-white border-black shadow-inner'
                : 'bg-white/50 text-gray-700 border-gray-100 hover:border-indigo-200'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${grayscale ? 'bg-gray-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <FaPalette size={12} />
            </div>
            <span className="font-semibold">Preto e Branco</span>
          </button>

          <button
            onClick={reset}
            className="cursor-pointer mt-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 hover:bg-red-500 text-red-600 hover:text-white transition-all font-bold border border-red-100 active:scale-95"
          >
            <FaUndo size={14} />
            Resetar Tudo
          </button>
        </div>
      </div>
    </>
  );
};
