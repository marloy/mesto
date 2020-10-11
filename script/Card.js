class Card {
  constructor(data, cardSelector, openPopup, closePopup) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
    this._popupPhoto = document.querySelector('.popup_type_photo');
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
    delete this._element;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('cards__like_active');
  }

  _openPhoto() {
    this._photo = this._popupPhoto.querySelector('.popup__photo');
    this._photo.alt = this._name;
    this._photo.src = this._link;
    this._popupPhoto.querySelector('.popup__title-photo').textContent = this._name;

    this._openPopup(this._popupPhoto);
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.cards__like');
    this._buttonDelete = this._element.querySelector('.cards__delete-button');
    this._cardImage = this._element.querySelector('.cards__photo');
    this._closePhotoButton = this._popupPhoto.querySelector('.popup__close-button');

    this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
    this._buttonLike.addEventListener('click', () => this._toggleLike());
    this._cardImage.addEventListener('click', () => this._openPhoto());
    this._closePhotoButton.addEventListener('click', () => this._closePopup(this._popupPhoto));
  }

  getCardElement() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__location').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
}

export default Card;
