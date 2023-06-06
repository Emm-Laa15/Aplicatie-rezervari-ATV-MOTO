import React from 'react';
import FullCalendar from '@fullcalendar/react'; // importa FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // importa plugin-ul pentru afișarea zilelor

const PopUpStartRezervare = ({ handleDateClick }) => {
  return (
    <div className='pop-up-start-rezervare'>
      <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick} // folosim funcția handleDateClick pe care o vom primi ca props
      />
    </div>
  );
};

export default PopUpStartRezervare;
