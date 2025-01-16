export function toggleCalendar(calendar) {
  calendar.addEventListener('click', (e) => {
    e.target.offsetParent.classList.toggle('show');
  });
}

export function createCalendar(calendar, data) {
  calendar.innerHTML = data;
}
