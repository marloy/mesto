// Находим форму в DOM
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__form');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__input_el_name');
    let jobInput = formElement.querySelector('.popup__input_el_job');

    // Выбор элементов, куда должны быть вставлены значения полей
    let job = document.querySelector('.profile__job');
    let name = document.querySelector('.profile__name');

    // Новые значения с помощью textContent
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);

// Находим кнопки в DOM
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close-button');
let savePopupButton = popup.querySelector('.popup__save-button');

// Открыть попап
function openPopup() {
  // Выбор элементов, откуда берутся значения
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__job');

  // Находим поля формы, куда должны быть вставлены значения
  let nameInput = formElement.querySelector('.popup__input_el_name');
  let jobInput = formElement.querySelector('.popup__input_el_job');

  // Новые значения полей формы
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;

  popup.classList.add('popup_opened');
}

// Закрыть попап
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчики к кнопкам
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
savePopupButton.addEventListener('click', closePopup);
