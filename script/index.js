import Card from './Card.js';

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Находим модалку редактирования профиля и форму  в DOM
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const formEditProfile = popupEditProfile.querySelector('.popup__form');

// Находим модалку добавления карточек и форму
const popupAddCard = document.querySelector('.popup_type_add-card');
const formAddCard = popupAddCard.querySelector('.popup__form');

// Находим поля формы редактирования профиля
const personNameInput = formEditProfile.querySelector('.popup__input_el_name');
const personJobInput = formEditProfile.querySelector('.popup__input_el_job');

// Находим поля формы добавления карточек
const cardPlaceInput = formAddCard.querySelector('.popup__input_el_place');
const cardLinkInput = formAddCard.querySelector('.popup__input_el_link');

// Находим кнопки модалки редактирования профиля
const openEditProfileButton = document.querySelector('.profile__edit-button');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');

// Находим кнопки модалки добавления карточки
const openAddCardButton = document.querySelector('.profile__add-button');
const closeAddCardButton = popupAddCard.querySelector('.popup__close-button');

// Находим элементы с именем и родом деятельности
const personName = document.querySelector('.profile__name');
const personJob = document.querySelector('.profile__job');

// Шаблон и место вставки созданных карточек
const cardGrid = document.querySelector('.cards__grid');

// Обработчик «отправки» формы
const handleSubmitEditProfile = evt => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    // Новые значения с помощью textContent
    personName.textContent = personNameInput.value;
    personJob.textContent = personJobInput.value;
    closePopup(popupEditProfile);
}

const handleSubmitAddCard = evt => {
  evt.preventDefault();
  const element = {name: cardPlaceInput.value, link: cardLinkInput.value};
  const card = new Card(element, '.cards-template', openPopup, closePopup);
  cardGrid.prepend(card.getCardElement());
  closePopup(popupAddCard);
}

const handleKey = evt => {
  if (evt.key === 'Escape') {
    closePopup(evt.currentTarget.querySelector('.popup_opened'));
  }
}

// Закрытие по нажатию мыши на оверлей
const handleClickOnOverlay = evt => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

// Открыть попап
const openPopup = modal => {
  modal.addEventListener('click', handleClickOnOverlay);
  document.addEventListener('keydown', handleKey);
  modal.classList.add('popup_opened');
}

// Закрыть попап
const closePopup = modal => {
  modal.removeEventListener('click', handleClickOnOverlay);
  document.removeEventListener('keydown', handleKey);
  modal.classList.remove('popup_opened');
}

// Загрузка картинок на страницу из массива
const renderCards = data => {
  data.forEach(element => {
    const card = new Card(element, '.cards-template', openPopup, closePopup);
    cardGrid.append(card.getCardElement());
  });
}

// Прикрепляем обработчик к форме
formEditProfile.addEventListener('submit', handleSubmitEditProfile);
formAddCard.addEventListener('submit', handleSubmitAddCard);

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener('click', () => {
  personNameInput.value = personName.textContent;
  personJobInput.value = personJob.textContent;
  openPopup(popupEditProfile);
});
openAddCardButton.addEventListener('click', () => {
  cardPlaceInput.value = '';
  cardLinkInput.value = '';
  openPopup(popupAddCard);
});
closeEditProfileButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
closeAddCardButton.addEventListener('click', () => {
  closePopup(popupAddCard);
})

renderCards(initialCards);
