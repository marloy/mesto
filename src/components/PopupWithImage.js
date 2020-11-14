// import { popupPhotoImage, popupPhotoTitle } from '../utils/constants.js';
import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupPhotoImage, popupPhotoTitle) {
    super(popupSelector);
    this._popupPhotoImage = popupPhotoImage;
    this._popupPhotoTitle = popupPhotoTitle;
  }

  open(data) {
    this._popupPhotoImage.src = data.link;
    this._popupPhotoImage.alt = data.name;
    this._popupPhotoTitle.textContent = data.name;
    super.open();
  }
}
