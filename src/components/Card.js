export default class Card {
  constructor({ data, userID, handleCardClick, handleCardDelete, handleLikeClick }, cardSelector) {
    this._userID = userID;
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerCardID = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardDelete = this._handleCardDelete.bind(this);
    this._handleLikeClick = handleLikeClick;
    this._handleLikeClick = this._handleLikeClick.bind(this);
    this._verifyLike = this._verifyLike.bind(this);
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.cards__like');
    this._cardImage = this._element.querySelector('.cards__photo');
    this._buttonDelete = this._element.querySelector('.cards__delete-button');
    this._showDeleteIcon();

    this._buttonDelete.addEventListener('click', this._handleCardDelete);
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick(this._verifyLike());
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link })
    });
  }

  _showDeleteIcon() {
    if(this._userID === this._ownerCardID) {
      this._buttonDelete.classList.remove('cards__delete-button_hidden');
    }
  }

  _toggleLike() {
    this._verifyLike()
      ? this._buttonLike.classList.add('cards__like_active')
      : this._buttonLike.classList.remove('cards__like_active');
  }

  _verifyLike() {
    return this._likes.some(item => item._id === this._userID);
  }

  updateLikes(data) {
    this._likes = data.likes;
    this._element.querySelector('.cards__like-counter').textContent = data.likes.length;
    this._toggleLike();
  }

  deleteCard() {
    this._buttonDelete.removeEventListener('click', this._handleCardDelete);
    this._element.remove();
    delete this._element;
  }

  getCardElement() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._toggleLike();
    this._element.querySelector('.cards__location').textContent = this._name;
    this._element.querySelector('.cards__like-counter').textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
}
