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
  personJobInput
} from '../utils/constants.js';


const popupImage = new PopupWithImage('.popup_type_photo');
popupImage.setEventListeners();

const userInfo = new UserInfo({ personNameSelector: '.profile__name', personJobSelector: '.profile__job' });

const popupEditProfile = new PopupWithForm({
  handleSubmitForm: item => {
    userInfo.setUserInfo(item);
    popupEditProfile.close();
  }
}, '.popup_type_edit-profile');
popupEditProfile.setEventListeners();

const createCard = data => {
  const card = new Card({
    data,
    handleCardClick: itemImage => {
      popupImage.open(itemImage);
    }
  }, '.cards-template');

  return card.getCardElement();
}

const cardsList = new Section({
  items: initialCards,
  renderer: item => cardsList.addItem(createCard(item))
}, '.cards__grid');
const enableValidation = config => {
  const formlist = Array.from(document.querySelectorAll(config.formSelector));
  formlist.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
  })
}

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  personNameInput.value = info.name;
  personJobInput.value = info.job;
  popupEditProfile.open();
});

openAddCardButton.addEventListener('click', () => {
});

cardsList.renderItems();
enableValidation(config);
