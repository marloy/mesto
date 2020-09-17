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

// Находим модалку с фотографией
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoImage = popupPhoto.querySelector('.popup__photo');
const popupPhotoTitle = popupPhoto.querySelector('.popup__title-photo')

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
const savePopupAddCardButton = popupAddCard.querySelector('.popup__save-button');

// Находим кнопку закрытия фотографии
const closePhotoButton = popupPhoto.querySelector('.popup__close-button');

// Находим элементы с именем и родом деятельности
const personName = document.querySelector('.profile__name');
const personJob = document.querySelector('.profile__job');

// Шаблон и место вставки созданных карточек
const cardTemplate = document.querySelector('.cards-template').content;
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
  cardGrid.prepend(createCard(cardPlaceInput.value, cardLinkInput.value));
  closePopup(popupAddCard);
}

// Переключатель попапа
const togglePopup = modal => {
  if(!modal.classList.contains('popup_opened')) {
    // Если попап закрыт - открыть
    modal.classList.add('popup_opened');
  } else {
    // Иначе - закрыть
    modal.classList.remove('popup_opened');
  }
}

// Открыть попап
const openPopup = modal => {
  modal.classList.add('popup_opened');
}

// Закрыть попап
const closePopup = modal => {
  modal.classList.remove('popup_opened');
}

// Переключатель лайка
const toggleLike = (buttonLike) => {
  buttonLike.classList.toggle('cards__like_active');
}

// Создание разметки карточки с навешанными обработчиками кнопок
const createCard = (name, link) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.cards__location');
  const cardImage = cardElement.querySelector('.cards__photo');
  const cardDeleteButton = cardElement.querySelector('.cards__delete-button');
  const cardLikeButton = cardElement.querySelector('.cards__like');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardDeleteButton.addEventListener('click', event => {
    event.target.closest('.cards__item').remove();
  });
  cardLikeButton.addEventListener('click', event => {
    toggleLike(event.target);
  });
  cardImage.addEventListener('click', () => {
    openPhoto(name, link)
  });
  return cardElement;
}

// Открыть модалку с фотографией
const openPhoto = (name, link) => {
  popupPhotoImage.src = link;
  popupPhotoImage.alt = name;
  popupPhotoTitle.textContent = name;

  openPopup(popupPhoto);
}

// Загрузка картинок на страницу из массива
const renderCards = data => {
  data.forEach(element => {
    cardGrid.append(createCard(element.name, element.link));
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
closePhotoButton.addEventListener('click', () => {
  closePopup(popupPhoto);
})

renderCards(initialCards);
