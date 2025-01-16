// import './style.css' with { type: "css" };
import { addSelectionEvent } from './selectDay.js';
import { toggleCalendar, createCalendar } from './manageCalendar.js';
import { generateCalendar } from './generateCalendar.js';
import data from './data.json' with { type: "json" };

toggleCalendar(document.querySelector('#calendar .arrow'));

const calendarData = generateCalendar(data);

createCalendar(document.querySelector('.calendar-body'), calendarData);

addSelectionEvent(
  document.querySelectorAll('.days .day:not(.disabled, .empty)')
);
