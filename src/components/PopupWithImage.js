import { popupPhotoImage, popupPhotoTitle } from '../utils/constants.js';
import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
  }

  open() {
    popupPhotoImage.src = this._link;
    popupPhotoImage.alt = this._name;
    popupPhotoTitle.textContent = this._name;
  }
}
