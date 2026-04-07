import NotFound from '../assets/svgs/not-found.svg';

export default () => {
  return (
    <>
      <header
        className="
      relative 
      header-main 
      flex 
      flex-col 
      items-center justify-center font-bold text-white gap-5 sm:flex-row"
      >
        <img src="/icon.png" className="icon-formater" alt="logotipo-camara" />
        <aside className="text-xl uppercase text-center">
          <h1 className="text-2xl xl:text-5xl font-black">Câmara municipal de vereadores</h1>
          <h2 className="xl:text-3xl">casa pedro cesar de carvalho</h2>
          <h3 className="font-normal">IATI - pe</h3>
        </aside>
      </header>
      <section className="h-100 flex items-center flex-col justify-center font-bold text-xl">
        <img src={NotFound} width={350} alt="pagina-não-encontrada-img" />
        <h2>404</h2>
        <h1>PAGINA NÃO ENCONTRADA</h1>
      </section>
    </>
  );
};
