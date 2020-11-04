import { popupPhotoImage, popupPhotoTitle } from '../utils/constants.js';
import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    popupPhotoImage.src = data.link;
    popupPhotoImage.alt = data.name;
    popupPhotoTitle.textContent = data.name;
    super.open();
  }
}
