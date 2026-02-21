import { useEffect, useState, type Key } from 'react';
import NotFound from '../assets/svgs/not-found.svg';
import ModalBase from './modals/ModalBase';
import Calendar, { type TileClassNameFunc } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const monthToNumber: { [key: string]: number } = {
  Janeiro: 0,
  Fevereiro: 1,
  Março: 2,
  Abril: 3,
  Maio: 4,
  Junho: 5,
  Julho: 6,
  Agosto: 7,
  Setembro: 8,
  Outubro: 9,
  Novembro: 10,
  Dezembro: 11,
};

interface EventsInterface {
  day: string;
  month: string;
  year: string;
  time: string;
  title: string;
  adress: string;
  img: string | string[];
}

export default () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const API_IATI = 'http://localhost:8000/api/events';
  const [eventData, setEventData] = useState<EventsInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLoad, setErrorLoad] = useState('');

  const getTileClassName: TileClassNameFunc = ({ date, view }) => {
    if (view === 'month') {
      const hasEvent = eventData.some(
        (event) =>
          date.getDate() === Number(event.day) &&
          date.getMonth() === monthToNumber[event.month] &&
          date.getFullYear() === Number(event.year),
      );
      return hasEvent ? 'event-highlight' : null;
    }
    return null;
  };

  useEffect(() => {
    const fetchEventsIati = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_IATI);
        if (!response.ok) throw new Error('Erro ao carregar eventos');
        const data = await response.json();
        setEventData(data);
      } catch (error: any) {
        setErrorLoad(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEventsIati();
  }, []);

  const finalEvents = [
    ...eventData.slice(0, 4),
    ...Array(Math.max(0, 4 - eventData.length)).fill(null),
  ];

  return (
    <>
      <section className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[400px]">
        {loading ? (
          <div className="col-span-full flex justify-center items-center h-64 w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : errorLoad ? (
          <div className="col-span-full flex justify-center items-center h-64 w-full">
            <p className="bg-red-100 text-red-500 p-5 border-b-4">{errorLoad}</p>
          </div>
        ) : (
          finalEvents.map((item, index) => (
            <div
              key={index}
              className={`w-full rounded-2xl border border-gray-300 overflow-hidden flex flex-col ${
                !item && 'justify-center items-center bg-gray-50'
              }`}
            >
              {item ? (
                <>
                  <div className="h-48 w-full relative">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      allowTouchMove={false}
                      loop={true}
                      className="h-full w-full"
                    >
                      {(Array.isArray(item.img) ? item.img : [item.img]).map(
                        (url: any, imgIndex: Key | null | undefined) => (
                          <SwiperSlide key={imgIndex}>
                            <div
                              className="h-full w-full bg-no-repeat bg-cover bg-center"
                              style={{ backgroundImage: `url(${url})` }}
                            />
                          </SwiperSlide>
                        ),
                      )}
                    </Swiper>
                    <div className="absolute top-3 left-3 z-10 bg-white py-2 px-7 text-center rounded-lg shadow-md pointer-events-none">
                      <h3 className="font-bold text-xl leading-none">{item.day}</h3>
                      <p className="font-light opacity-50 text-xs uppercase">
                        {item.month.slice(0, 3)}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold line-clamp-2 min-h-[3.5rem]">
                        {item.title}
                      </h3>
                      <p className="pt-2 text-xs text-gray-600">
                        <strong>Horário:</strong> {item.time}
                      </p>
                      <p className="pb-4 text-xs text-gray-600">
                        <strong>Local:</strong> {item.adress}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCalendarOpen(true)}
                      className="w-full cursor-pointer flex justify-center border border-gray-300 p-2 rounded-lg hover:border-green-500 hover:bg-green-50 hover:text-green-600 transition-all font-semibold text-sm"
                    >
                      Ver agenda
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center gap-4 text-gray-400">
                  <img src={NotFound} width={120} alt="Sem eventos" className="opacity-60" />
                  <h3 className="text-sm font-bold italic">Nenhum evento agendado</h3>
                </div>
              )}
            </div>
          ))
        )}
      </section>

      <ModalBase
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        title="Agenda de eventos"
      >
        <div className="flex flex-col items-center p-2">
          <Calendar
            onChange={(d) => setDate(d as Date)}
            value={date}
            tileClassName={getTileClassName}
            className="rounded-xl border-none shadow-sm"
          />
          <div className="mt-6 w-full">
            <h4 className="font-bold text-gray-700 border-b pb-2 mb-3">Próximos Eventos</h4>
            <div className="max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {eventData.length > 0 ? (
                eventData.map((ev, i) => (
                  <div
                    key={i}
                    className="text-sm py-3 border-b last:border-0 flex gap-4 items-center"
                  >
                    <div className="flex flex-col items-center bg-blue-50 text-blue-700 rounded-lg p-2 min-w-[50px]">
                      <span className="font-bold text-base leading-none">{ev.day}</span>
                      <span className="text-[10px] uppercase font-medium">
                        {ev.month.slice(0, 3)}
                      </span>
                    </div>
                    <span className="flex-1 font-medium text-gray-800 line-clamp-2">
                      {ev.title}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm italic">Nenhum evento na lista.</p>
              )}
            </div>
          </div>
        </div>
      </ModalBase>
    </>
  );
};
