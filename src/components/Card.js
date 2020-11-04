class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._data = data;  
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.cards__like');
    this._buttonDelete = this._element.querySelector('.cards__delete-button');
    this._cardImage = this._element.querySelector('.cards__photo');

    this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
    this._buttonLike.addEventListener('click', () => this._toggleLike());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._data));
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
