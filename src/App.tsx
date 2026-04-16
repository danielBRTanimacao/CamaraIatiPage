import News from './components/News';
import Events from './components/Events';
import Councilors from './components/Councilors';
import Footer from './components/Footer';
import Header from './components/Header';
import BackPageButton from './components/ui/fastTrack/BackPageButton';
import FastSearch from './components/ui/landing/FastSearch';

export default () => {
  return (
    <>
      <BackPageButton />
      <Header />
      <FastSearch />
      <div className="pt-5"></div>
      <main className="container">
        <News />
        <h1 className="pt-5 text-2xl font-extrabold flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-calendar-week"
            viewBox="0 0 16 16"
          >
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          <span>Eventos</span>
        </h1>
        <Events />
      </main>
      <Councilors />
      <Footer />
    </>
  );
};
