export function showModal(modal) {
  modal.classList.add('show');
}

export function addHoursToModal(modal, hours) {
  const hoursListItem = hours
    .split('|')
    .map(
      (hour) =>
        `<li class="hour"><a href="//prenota?orario=${hour}">${hour}</a></li>`
    )
    .join('');
  modal.querySelector('ul').innerHTML = hoursListItem;
}
