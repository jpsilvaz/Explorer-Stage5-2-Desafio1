export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  toggle() {
    Modal.wrapper.classList.toggle('open');
  },
};

Modal.buttonClose.onclick = () => {
  Modal.toggle();
};

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.toggle();
  };
};