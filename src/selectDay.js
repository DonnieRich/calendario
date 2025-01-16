import { showModal, addHoursToModal } from './manageModal.js';

function selectDay(day) {
  day.addEventListener('click', (e) => {
    const add = day.classList.contains('selected');
    resetSelection();

    if (!add) {
      day.classList.add('selected');

      showModal(document.querySelector('.modal'));
      addHoursToModal(document.querySelector('.modal'), day.dataset.hours);
    }
    e.stopPropagation();
  });
}

function resetSelection() {
  document.querySelector('.day.selected')?.classList.remove('selected');
}

export function addSelectionEvent(days) {
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    selectDay(day);
  }
}
