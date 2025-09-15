import Header from "../../components/Header";

import Ver1 from "../../assets/images/councilors/ver1.webp";
import Ver2 from "../../assets/images/councilors/ver2.webp";
import Ver3 from "../../assets/images/councilors/ver3.webp";
import Ver4 from "../../assets/images/councilors/ver4.webp";
import Ver5 from "../../assets/images/councilors/ver5.webp";
import Ver6 from "../../assets/images/councilors/ver6.webp";
import Ver7 from "../../assets/images/councilors/ver7.webp";
import Ver8 from "../../assets/images/councilors/ver8.webp";
import Ver9 from "../../assets/images/councilors/ver9.webp";
import Ver10 from "../../assets/images/councilors/ver10.webp";
import Ver11 from "../../assets/images/councilors/ver11.webp";
import Footer from "../../components/Footer";

const Councilors = [
  { name: "Edvaldo Cordeiro", img: Ver1 },
  { name: "Jose Cicero", img: Ver2 },
  { name: "Antonio Texeira", img: Ver3 },
  { name: "Erlan Tenório", img: Ver4 },
  { name: "Cicero Pereira", img: Ver5 },
  { name: "Taciano Mota", img: Ver6 },
  { name: "Everaldo Pereira", img: Ver7 },
  { name: "Joselio Terezino", img: Ver8 },
  { name: "Renato Almeida", img: Ver9 },
  { name: "Rodrigo Ferreira", img: Ver10 },
  { name: "Arthur Tavares", img: Ver11 },
];

export default () => {
  return (
    <>
      <Header />
      <main className="container">
        <article className="bg-gray-200 p-2 flex gap-5 my-5">
          {Councilors.map((councilor, key) => (
            <a
              key={key}
              href="#nomeOuIdDoVereador"
              className="hover:scale-125 transition-all ease-in-out"
            >
              <img src={councilor.img} alt="img-vereador" className="w-25" />
              <span>{councilor.name}</span>
            </a>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
};
