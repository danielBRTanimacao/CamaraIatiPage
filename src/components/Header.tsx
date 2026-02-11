import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import {
  BsList,
  BsHouseGearFill,
  BsPaperclip,
  BsPersonRolodex,
  BsPeople,
  BsArchive,
  BsHeadset,
} from 'react-icons/bs';

import IconMunicipio from '../assets/svgs/icone-municipio.svg';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageLegislation =
    'https://tecnosolutions.inf.br/transparencia/iati/camara/legislacaomunicipal.faces';

  const CustomLink = ({ item, children }: { item: any; children: React.ReactNode }) => {
    const isExternal = item.href.startsWith('http');
    const className =
      'transition-all hover:scale-110 p-4 w-36 h-36 sm:w-40 bg-green-700 hover:bg-green-800 rounded-lg flex flex-col items-center justify-center text-center';

    if (isExternal) {
      return (
        <a href={item.href} className={className} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={item.href} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <>
      <header className="relative header-main flex flex-col items-center justify-center font-bold text-white gap-5 sm:flex-row">
        <button
          id="burger"
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer absolute bottom-10 left-1/25 -translate-x-1/2 top-1 px-3 rounded-lg transition-colors border border-white/50 opacity-75 shadow-lg sm:hidden"
        >
          <BsList size={32} />
        </button>

        <img src="/icon.png" className="icon-formater" alt="logotipo-camara" />
        <aside className="text-xl uppercase text-center">
          <h1 className="text-2xl xl:text-5xl font-black">Câmara municipal de vereadores</h1>
          <h2 className="xl:text-3xl">casa pedro cesar de carvalho</h2>
          <h3 className="font-normal">IATI - pe</h3>
        </aside>
      </header>

      {menuOpen && (
        <aside className="fixed top-0 right-0 h-screen w-3/4 bg-amber-400 text-white shadow-lg z-50 flex flex-col items-end gap-5 p-5 sm:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl font-bold cursor-pointer transition-all hover:scale-125"
          >
            ✕
          </button>
          <ul className="flex flex-col text-end gap-2 text-lg font-medium">
            <li>
              <Link to="/municipio" className="transition-all hover:text-xl">
                Municipio
              </Link>
            </li>
            <li>
              <Link to="/camara" className="transition-all hover:text-xl">
                A Câmara
              </Link>
            </li>
            <li>
              <a href={pageLegislation} className="transition-all hover:text-xl">
                Legislação
              </a>
            </li>
            <li>
              <Link to="/vereadores" className="transition-all hover:text-xl">
                Vereadores
              </Link>
            </li>
            <li>
              <a href="https://tecnosolutions.inf.br/transparencia/iati/camara/">Transparência</a>
            </li>
            <li>
              <a
                href="https://tecnosolutions.inf.br/transparencia/iati/camara/esic.faces"
                className="transition-all hover:text-xl"
              >
                e-SIC
              </a>
            </li>
          </ul>
        </aside>
      )}

      <aside className="bg-gray-100 hidden py-5 sm:block border-b-1 border-gray-300">
        <ul className="container flex justify-between items-center text-lg font-bold text-white">
          {[
            {
              href: '/municipio',
              label: 'Municipio',
              image: <img src={IconMunicipio} alt="" />,
              extra: 'hidden md:block',
            },
            {
              href: '/camara',
              label: 'A Câmara',
              image: <BsHouseGearFill size={40} />,
            },
            {
              href: pageLegislation,
              label: 'Legislação',
              image: <BsPaperclip size={40} />,
            },
            {
              href: '/vereadores',
              label: 'Vereadores',
              image: <BsPersonRolodex size={40} />,
              extra: 'hidden lg:block',
            },
            {
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/',
              label: 'Transparência',
              image: <BsPeople size={40} />,
              extra: 'hidden 2xl:block',
            },
            {
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/esic.faces',
              label: 'e-SIC',
              image: <BsArchive size={40} />,
            },
            {
              href: 'https://tecnosolutions.inf.br/transparencia/iati/camara/esic.faces',
              label: 'Ouvidoria',
              image: <BsHeadset size={40} />,
              extra: 'hidden xl:block',
            },
          ].map((item, idx) => (
            <li key={idx} className={item.extra || ''}>
              <CustomLink item={item}>
                {item.image}
                <span className="mt-2">{item.label}</span>
              </CustomLink>
            </li>
          ))}
        </ul>
      </aside>

      <div className="pt-20"></div>
    </>
  );
};
