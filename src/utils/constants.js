export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const popupPhotoSelector = ".popup_type_photo";
export const popupDeleteCardSelector = ".popup_type_delete-card";
export const popupEditProfileSelector = ".popup_type_edit-profile";
export const popupAddCardSelector = ".popup_type_add-card";
export const popupUpdateAvatarSelector = ".popup_type_update-avatar";
export const personNameSelector = ".profile__name";
export const personJobSelector = ".profile__job";
export const personAvatarSelector = ".profile__avatar";
export const cardsTemplateSelector = ".cards-template";
export const cardsContainerSelector = ".cards__grid";

// Находим модалку редактирования профиля и форму  в DOM
export const popupEditProfile = document.querySelector(
  ".popup_type_edit-profile"
);
export const formEditProfile = popupEditProfile.querySelector(".popup__form");
export const submitEditProfileButton = popupEditProfile.querySelector(".popup__save-button");

// Находим модалку добавления карточек и форму
export const popupAddCard = document.querySelector(".popup_type_add-card");
export const formAddCard = popupAddCard.querySelector(".popup__form");
export const submitAddCardButton = popupAddCard.querySelector(".popup__save-button");

export const popupUpdateAvatarElement = document.querySelector(".popup_type_update-avatar");
export const formUpdateAvatar = popupUpdateAvatarElement.querySelector(".popup__form");
export const submitUpdateAvatarButton = popupUpdateAvatarElement.querySelector(".popup__save-button");

// Находим поля формы редактирования профиля
export const personNameInput = formEditProfile.querySelector(
  ".popup__input_el_name"
);
export const personJobInput = formEditProfile.querySelector(
  ".popup__input_el_job"
);

// Находим поля формы добавления карточек
export const cardPlaceInput = formAddCard.querySelector(
  ".popup__input_el_place"
);
export const cardLinkInput = formAddCard.querySelector(".popup__input_el_link");

// Находим кнопки модалки редактирования профиля
export const openEditProfileButton = document.querySelector(
  ".profile__edit-button"
);
// Находим кнопки модалки добавления карточки
export const openAddCardButton = document.querySelector(".profile__add-button");

export const openUpdateAvatarButton = document.querySelector(".profile__cover-avatar");
export const popupPhotoImage = document.querySelector(".popup__photo");
export const popupPhotoTitle = document.querySelector(".popup__title-photo");
