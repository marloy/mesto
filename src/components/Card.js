export default class Card {
  constructor({ data, handleCardClick, handleCardDelete }, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerCardID = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardDelete = this._handleCardDelete.bind(this);
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('cards__like_active');
  }

  deleteCard() {
    this._buttonDelete.removeEventListener('click', this._handleCardDelete);
    this._element.remove();
    delete this._element;
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.cards__like');
    this._buttonDelete = this._element.querySelector('.cards__delete-button');
    this._cardImage = this._element.querySelector('.cards__photo');

    this._buttonDelete.addEventListener('click', this._handleCardDelete);
    this._buttonLike.addEventListener('click', () => this._toggleLike());
    this._cardImage.addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
  }

  showDeleteButton(userID) {
    if(userID === this._ownerCardID) {
      this._buttonDelete.classList.remove('cards__delete-button_hidden');
    }
  }

  getCardElement() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__location').textContent = this._name;
    this._element.querySelector('.cards__like-counter').textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
}
