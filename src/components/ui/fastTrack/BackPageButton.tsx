import { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

export default () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="cursor-pointer fixed bottom-5 right-5 z-50 p-3 rounded-full bg-green-700 text-white shadow-lg transition-all duration-300 hover:bg-green-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Voltar ao topo"
        >
          <BsArrowUpShort size={30} />
        </button>
      )}
    </>
  );
};
