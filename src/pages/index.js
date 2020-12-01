// import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'

import {
  openEditProfileButton,
  openAddCardButton,
  config,
  personNameInput,
  personJobInput,
  popupDeleteCardSelector,
  popupPhotoSelector,
  personNameSelector,
  personJobSelector,
  personAvatarSelector,
  popupEditProfileSelector,
  cardsTemplateSelector,
  cardsContainerSelector,
  popupAddCardSelector,
  popupPhotoImage,
  popupPhotoTitle
} from '../utils/constants.js';

const profileConfig = {
  token: '033f0036-9ee8-4b41-8ee5-5354d3c009cf',
  cohortID: 'cohort-17',
  baseURL: 'https://mesto.nomoreparties.co'
}

const api = new Api(profileConfig);
const popupImage = new PopupWithImage(popupPhotoSelector, popupPhotoImage, popupPhotoTitle);
const poopupDeleteCard = new PopupDeleteCard(popupDeleteCardSelector);
const userInfo = new UserInfo({
    personNameSelector,
    personJobSelector,
    personAvatarSelector
  });

const cardsList = new Section({
  renderer: item => cardsList.addItemAppend(createCard(item))
}, cardsContainerSelector);

const popupEditProfile = new PopupWithForm({
  handleSubmitForm: item => {
    api.saveUserInfo(item).then(data => {
      userInfo.setUserInfo(data);
    })
    popupEditProfile.close();
  }
}, popupEditProfileSelector);

const popupAddCard = new PopupWithForm({
  handleSubmitForm: item => {
    api.saveCard(item).then(data => {
      cardsList.addItemPrepend(createCard(data));
    })
    popupAddCard.close();
  }
}, popupAddCardSelector);

const createCard = data => {
  const card = new Card({
    data,
    handleCardClick: itemImage => {
      popupImage.open(itemImage);
    },
    handleCardDelete: () => {
      poopupDeleteCard.open();
      poopupDeleteCard.setSubmitAction(() => {
        api.deleteCard(card).then((res) => {
          console.log(res);
          card.deleteCard();
        });
        poopupDeleteCard.close();
      });
    },
  }, cardsTemplateSelector);

  api.getUserInfo().then(res => {
    card.showDeleteButton(res._id);
  })

  return card.getCardElement();
}

const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
  })
}

poopupDeleteCard.setEventListeners();
popupEditProfile.setEventListeners();
popupImage.setEventListeners();
popupAddCard.setEventListeners();

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  personNameInput.value = info.name;
  personJobInput.value = info.job;
  popupEditProfile.open();
});

openAddCardButton.addEventListener('click', () => {
  popupAddCard.open()
});

api.getUserInfo().then(data => {
  userInfo.setUserAvatar(data);
  userInfo.setUserInfo(data);
});

api.getInitialCards().then(res => {
  cardsList.renderItems(res)
});

enableValidation(config);
