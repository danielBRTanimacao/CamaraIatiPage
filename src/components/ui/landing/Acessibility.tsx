import { useState, useEffect } from 'react';
import { FaUniversalAccess, FaTimes } from 'react-icons/fa';

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    const filters: string[] = [];

    if (highContrast) {
      filters.push('contrast(200%) brightness(150%)');
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

  useEffect(() => {
    const saved = localStorage.getItem('accessibility');
    if (saved) {
      const data = JSON.parse(saved);
      setFontSize(data.fontSize);
      setHighContrast(data.highContrast);
      setGrayscale(data.grayscale);
    }
  }, []);

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
        aria-expanded={isOpen}
        className="cursor-pointer fixed top-5 left-5 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800"
      >
        <FaUniversalAccess size={26} />
      </button>

      {isOpen && (
        <div className="fixed top-20 left-5 z-[10000] w-64 p-4 bg-gray-100 border rounded-xl shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-3 border-b pb-2">
            <strong className="text-gray-800">Acessibilidade</strong>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer text-gray-600">
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setFontSize((prev) => Math.min(prev + 10, 200))}
              className="cursor-pointer p-2 border rounded bg-white font-semibold text-left hover:bg-gray-200"
            >
              Aumentar Texto
            </button>

            <button
              onClick={() => setFontSize((prev) => Math.max(prev - 10, 70))}
              className="cursor-pointer p-2 border rounded bg-white font-semibold text-left hover:bg-gray-200"
            >
              Diminuir Texto
            </button>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className="cursor-pointer cursor-pointer p-2 border rounded bg-white font-semibold text-left hover:bg-gray-200"
            >
              Alto Contraste
            </button>

            <button
              onClick={() => setGrayscale(!grayscale)}
              className="cursor-pointer p-2 border rounded bg-white font-semibold text-left hover:bg-gray-200"
            >
              Preto e Branco
            </button>

            <button
              onClick={reset}
              className="cursor-pointer p-2 border rounded bg-red-600 text-white font-semibold text-left hover:bg-red-700"
            >
              Resetar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
