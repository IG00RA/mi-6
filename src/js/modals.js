// Модалка для hotel-page столик
const refs = {
  // Table
  openmodTableBtn: document.querySelector('[data-modTable-open]'),
  closemodTableBtn: document.querySelector('[data-modTable-close]'),
  modTable: document.querySelector('[data-modTable]'),
  // Room
  openmodRoomBtn: document.querySelector('[data-modRoom-open]'),
  closemodRoomBtn: document.querySelector('[data-modRoom-close]'),
  modRoom: document.querySelector('[data-modRoom]'),
  // Detalis room
  openmodDetRoomBtn: document.querySelector('[data-modDetRoom-open]'),
  closemodDetRoomBtn: document.querySelector('[data-modDetRoom-close]'),
  modDetRoom: document.querySelector('[data-modDetRoom]'),
  //   Detalis table
  openmodDetTableBtn: document.querySelector('[data-modDetTable-open]'),
  closemodDetTableBtn: document.querySelector('[data-modDetTable-close]'),
  modDetTable: document.querySelector('[data-modDetTable]'),

  body: document.querySelector('body'),
};

refs.openmodTableBtn.addEventListener('click', togglemodTable);
refs.closemodTableBtn.addEventListener('click', togglemodTable);
refs.openmodRoomBtn.addEventListener('click', togglemodRoom);
refs.closemodRoomBtn.addEventListener('click', togglemodRoom);
refs.openmodDetRoomBtn.addEventListener('click', togglemodDetRoom);
refs.closemodDetRoomBtn.addEventListener('click', togglemodDetRoom);
refs.openmodDetTableBtn.addEventListener('click', togglemodDetTable);
refs.closemodDetTableBtn.addEventListener('click', togglemodDetTable);

function togglemodTable() {
  refs.modTable.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
function togglemodRoom() {
  refs.modRoom.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
function togglemodDetRoom() {
  refs.modDetRoom.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
function togglemodDetTable() {
  refs.modDetTable.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
