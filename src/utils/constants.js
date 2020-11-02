export const initialCards = [
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

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const popupPhotoImage = document.querySelector('.popup__photo');
export const popupPhotoTitle = document.querySelector('.popup__title-photo');

// Находим модалку редактирования профиля и форму  в DOM
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const formEditProfile = popupEditProfile.querySelector('.popup__form');

// Находим модалку добавления карточек и форму
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const formAddCard = popupAddCard.querySelector('.popup__form');

// Находим поля формы редактирования профиля
export const personNameInput = formEditProfile.querySelector('.popup__input_el_name');
export const personJobInput = formEditProfile.querySelector('.popup__input_el_job');

// Находим поля формы добавления карточек
export const cardPlaceInput = formAddCard.querySelector('.popup__input_el_place');
export const cardLinkInput = formAddCard.querySelector('.popup__input_el_link');

// Находим кнопки модалки редактирования профиля
export const openEditProfileButton = document.querySelector('.profile__edit-button');
export const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');

// Находим кнопки модалки добавления карточки
export const openAddCardButton = document.querySelector('.profile__add-button');
export const closeAddCardButton = popupAddCard.querySelector('.popup__close-button');

// Находим элементы с именем и родом деятельности
export const personName = document.querySelector('.profile__name');
export const personJob = document.querySelector('.profile__job');

// Шаблон и место вставки созданных карточек
export const cardGrid = document.querySelector('.cards__grid');
