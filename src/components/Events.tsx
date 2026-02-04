import { useState } from 'react';
import EventPhoto from '../assets/images/events/event1.webp';
import NotFound from '../assets/svgs/not-found.svg';
import ModalBase from './modals/ModalBase';
import Calendar, { type TileClassNameFunc } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

export default () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const eventData = [
    {
      day: '29',
      month: 'Agosto',
      time: '11:00 - 12:00',
      year: '2025',
      title: '10° reunião ordinária do terceiro período legislativo',
      adress: 'R. Padre Nelson B Carvalho',
      img: EventPhoto,
    },
    {
      day: '09',
      month: 'Janeiro',
      time: '9:00 - 11:00',
      year: '2026',
      title: 'Inauguração do ano legislativo de 2026',
      adress: 'R. Padre Nelson B Carvalho',
      img: EventPhoto,
    },
  ];

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

  const finalEvents = [
    ...eventData.slice(0, 4),
    ...Array(Math.max(0, 4 - eventData.length)).fill(null),
  ];

  return (
    <>
      <section className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {finalEvents.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-2xl border border-gray-300 overflow-hidden ${
              item ? '' : 'flex items-center justify-center min-h-[400px]'
            }`}
          >
            {item ? (
              <>
                <div
                  className="h-45 bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="bg-white float-left m-3 py-1 px-3 text-center rounded-lg shadow-md">
                    <h3 className="font-bold text-xl">{item.day}</h3>
                    <p className="font-light opacity-50 text-md">{item.month}</p>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-extrabold line-clamp-2">{item.title}</h3>
                  <p className="pt-2 text-sm">
                    <strong>Horário:</strong> {item.time}
                  </p>
                  <p className="pb-4 text-sm">
                    <strong>Local:</strong> {item.adress}
                  </p>
                  <div className="pb-4">
                    <button
                      onClick={() => setIsCalendarOpen(true)}
                      className="w-full cursor-pointer flex justify-center border border-gray-300 p-2 rounded hover:border-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      Ver agenda
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center flex-col justify-center h-60 text-center gap-5 text-gray-500">
                <img src={NotFound} width={150} alt="" />
                <h3 className="text-lg font-bold mx-2">Ainda não temos novos eventos</h3>
              </div>
            )}
          </div>
        ))}
      </section>

      <ModalBase
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        title="Agenda de eventos"
      >
        <div className="flex flex-col items-center">
          <Calendar
            onChange={(d) => setDate(d as Date)}
            value={date}
            tileClassName={getTileClassName}
            className="rounded-lg border-gray-200"
          />
          <div className="mt-4 w-full max-h-40 overflow-y-auto">
            <h4 className="font-bold border-b pb-2 mb-2">Próximos Eventos</h4>
            {eventData.map((ev, i) => (
              <div
                key={i}
                className="text-sm py-2 border-b last:border-0 flex justify-between items-center"
              >
                <span className="font-bold text-blue-600 w-20">
                  {ev.day} {ev.month.slice(0, 3)}
                </span>
                <span className="flex-1 px-2 line-clamp-1">{ev.title}</span>
              </div>
            ))}
          </div>
        </div>
      </ModalBase>
    </>
  );
};
