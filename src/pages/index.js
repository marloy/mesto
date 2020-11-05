import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  openEditProfileButton,
  openAddCardButton,
  config,
  personNameInput,
  personJobInput,
  cardPlaceInput,
  cardLinkInput,
  popupPhotoSelector,
  personNameSelector,
  personJobSelector,
  popupEditProfileSelector,
  cardsTemplateSelector,
  cardsContainerSelector,
  popupAddCardSelector
} from '../utils/constants.js';

const eventInput = new Event('input');
const popupImage = new PopupWithImage(popupPhotoSelector);
const userInfo = new UserInfo({ personNameSelector, personJobSelector });

const popupEditProfile = new PopupWithForm({
  handleSubmitForm: item => {
    userInfo.setUserInfo(item);
    popupEditProfile.close();
  }
}, popupEditProfileSelector);

const cardsList = new Section({
  items: initialCards,
  renderer: item => cardsList.addItem(createCard(item))
}, cardsContainerSelector);

const popupAddCard = new PopupWithForm({
  handleSubmitForm: item => {
    cardsList.addItem(createCard({name: item.placeInput, link: item.linkInput}));
    popupAddCard.close();
  }
}, popupAddCardSelector);

const createCard = data => {
  const card = new Card({
    data,
    handleCardClick: itemImage => {
      popupImage.open(itemImage);
    }
  }, cardsTemplateSelector);

  return card.getCardElement();
}

const enableValidation = config => {
  const formlist = Array.from(document.querySelectorAll(config.formSelector));
  formlist.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
  })
}

popupEditProfile.setEventListeners();
popupImage.setEventListeners();
popupAddCard.setEventListeners();

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  personNameInput.value = info.name;
  personJobInput.value = info.job;
  personNameInput.dispatchEvent(eventInput);
  personJobInput.dispatchEvent(eventInput);
  popupEditProfile.open();
});

openAddCardButton.addEventListener('click', () => {
  cardPlaceInput.dispatchEvent(eventInput);
  cardLinkInput.dispatchEvent(eventInput);
  popupAddCard.open()
});

cardsList.renderItems();
enableValidation(config);
