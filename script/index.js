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

// Находим попап и форму в DOM
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const formElement = popupEditProfile.querySelector('.popup__form');

// Находим кнопки модалки редактирования профиля
const openEditProfileButton = document.querySelector('.profile__edit-button');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');
const savePopupEditProfileButton = popupEditProfile.querySelector('.popup__save-button');

// Находим элементы с именем и родом деятельности
const personName = document.querySelector('.profile__name');
const personJob = document.querySelector('.profile__job');

// Находим поля формы
const personNameInput = formElement.querySelector('.popup__input_el_name');
const personJobInput = formElement.querySelector('.popup__input_el_job');

// Шаблон и место вставки созданных карточек
const cardTemplate = document.querySelector('.cards-template').content;
const cardGrid = document.querySelector('.cards__grid');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    // Новые значения с помощью textContent
    personName.textContent = personNameInput.value;
    personJob.textContent = personJobInput.value;
    togglePopup();
}

// Переключатель попапа
function togglePopup() {
  if(!popupEditProfile.classList.contains('popup_opened')) {
    // Если попап закрыт, взять значения из элементов и добавить в форму
    personNameInput.value = personName.textContent;
    personJobInput.value = personJob.textContent;
    // Открыть попап
    popupEditProfile.classList.add('popup_opened');
  } else {
    // Иначе - закрыть
    popupEditProfile.classList.remove('popup_opened');
  }
}

const createCard = (name, link) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.cards__location');
  const cardImage = cardElement.querySelector('.cards__photo');
  const cardDeleteButton = cardElement.querySelector('.cards__delete-button');
  const cardLikeButton = cardElement.querySelector('.cards__like');

  cardTitle.textContent = name;
  cardImage.src = link;

  cardDeleteButton.addEventListener('click', event => {
    event.target.closest('.cards__item').remove();
  });
  cardLikeButton.addEventListener('click', event => {
    event.target.classList.toggle('cards__like_active');
  });

  cardGrid.append(cardElement);
}

const renderCards = data => {
  data.forEach(element => {
    createCard(element.name, element.link);
  });
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);
// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener('click', togglePopup);
closeEditProfileButton.addEventListener('click', togglePopup);

renderCards(initialCards);
