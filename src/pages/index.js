import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

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
    closePopup(evt.currentTarget);
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

const enableValidation = config => {
  const formlist = Array.from(document.querySelectorAll(config.formSelector));
  formlist.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
  })
}

// Прикрепляем обработчик к форме
formEditProfile.addEventListener('submit', handleSubmitEditProfile);
formAddCard.addEventListener('submit', handleSubmitAddCard);

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener('click', () => {
  personNameInput.value = personName.textContent;
  personJobInput.value = personJob.textContent;
  personNameInput.dispatchEvent(eventInput);
  personJobInput.dispatchEvent(eventInput);
  openPopup(popupEditProfile);
});
openAddCardButton.addEventListener('click', () => {
  cardPlaceInput.value = '';
  cardLinkInput.value = '';
  cardPlaceInput.dispatchEvent(eventInput);
  cardLinkInput.dispatchEvent(eventInput);
  openPopup(popupAddCard);
});
closeEditProfileButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
closeAddCardButton.addEventListener('click', () => {
  closePopup(popupAddCard);
})

renderCards(initialCards);
enableValidation(config);
