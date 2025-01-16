/**
  <div class="month">
    <div class="month-header">
      <h2 class="month-name">Gennaio</h2>
    </div>

    <div class="month-body">
      <ul class="weekdays">
        <li class="day">Lu</li>
        <li class="day">Ma</li>
        <li class="day">Me</li>
        <li class="day">Gi</li>
        <li class="day">Ve</li>
        <li class="day">Sa</li>
        <li class="day">Do</li>
      </ul>

      <ul class="days">
        <li class="day"></li>
        <li class="day"></li>
        <li class="day">1</li>
        <li class="day">2</li>
        <li class="day">3</li>
        <li class="day disabled">4</li>
        <li class="day disabled">5</li>
        <li class="day">6</li>
        <li class="day">7</li>
        <li class="day">8</li>
        <li class="day">9</li>
        <li class="day">10</li>
        <li class="day disabled">11</li>
        <li class="day disabled">12</li>
        <li class="day">13</li>
      </ul>
    </div>
  </div>
 */

const monthMap = {
  1: 'Gennaio',
  2: 'Febbraio',
  3: 'Marzo',
  4: 'Aprile',
  5: 'Maggio',
  6: 'Giugno',
  7: 'Luglio',
  8: 'Agosto',
  9: 'Settembre',
  10: 'Ottobre',
  11: 'Novembre',
  12: 'Dicembre',
};

const weekdaysMap = ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'];

export function generateCalendar(data) {
  let string = '';

  for (let i = 0; i < data.length; i++) {
    const currentMonth = data[i];
    const { year, monthName, monthIndex, days } = currentMonth;

    const firstDayOfMonth = new Date(`${year}-${monthIndex}-1`);
    const localeMonthName = monthMap[monthIndex];
    const weekdays = generateWeekdays();

    const emptyElements = getNumberOfEmptyElements(firstDayOfMonth);
    const emptyListItems = getEmptyListItems(emptyElements);

    const fullListItems = getFullListItems(days);

    string += `
      <div class="month">
        <div class="month-header">
          <h2 class="month-name">${localeMonthName}</h2>
        </div>
        <div class="month-body">
          <ul class="weekdays">
            ${weekdays}
          </ul>
          <ul class="days">
            ${emptyListItems}
            ${fullListItems}
          </ul>
        </div>
      </div>
    `;
  }

  return string;
}

function getFullListItems(days) {
  let string = '';
  for (const day in days) {
    const disabled = days[day].length <= 0 ? 'disabled' : '';
    const availableHours = days[day].join('|');

    string += `<li class="day ${disabled}" data-hours="${availableHours}">${day}</li>`;
  }

  return string;
}

function generateWeekdays() {
  return weekdaysMap.map((day) => `<li class="day">${day}</li>`).join('');
}

function getNumberOfEmptyElements(date) {
  const weekDay = date.getDay();
  return weekDay - 1;
}

function getEmptyListItems(n) {
  return `<li class="day empty"></li>`.repeat(n);
}
