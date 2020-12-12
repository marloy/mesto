import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  openEditProfileButton,
  openAddCardButton,
  config,
  personNameInput,
  personJobInput,
  popupDeleteCardSelector,
  popupPhotoSelector,
  personNameSelector,
  personJobSelector,
  personAvatarSelector,
  popupEditProfileSelector,
  popupUpdateAvatarSelector,
  cardsTemplateSelector,
  cardsContainerSelector,
  popupAddCardSelector,
  popupPhotoImage,
  popupPhotoTitle,
  openUpdateAvatarButton,
  submitEditProfileButton,
  submitAddCardButton,
  submitUpdateAvatarButton,
} from "../utils/constants.js";

const profileConfig = {
  token: "37682f5b-4bfd-4bac-9745-591da8798f65",
  cohortID: "cohort-18",
  baseURL: "https://mesto.nomoreparties.co",
};

let userID = null;

const editProfileFormValidator = new FormValidator(config, popupEditProfileSelector);
const updateAvatarFormValidator = new FormValidator(config, popupUpdateAvatarSelector);
const addCardFormValidator = new FormValidator(config, popupAddCardSelector);

const api = new Api(profileConfig);
const popupImage = new PopupWithImage(
  popupPhotoSelector,
  popupPhotoImage,
  popupPhotoTitle
);
const poopupDeleteCard = new PopupDeleteCard(popupDeleteCardSelector);
const userInfo = new UserInfo({
  personNameSelector,
  personJobSelector,
  personAvatarSelector,
});

const cardsList = new Section(
  {
    renderer: (item) => cardsList.addItemAppend(createCard(item)),
  },
  cardsContainerSelector
);

api.getAllNeededData().then((args) => {
  const [userInfoFromServer, initialCardsFromServer] = args;
  userID = userInfoFromServer._id;
  userInfo.setUserAvatar(userInfoFromServer);
  userInfo.setUserInfo(userInfoFromServer);
  cardsList.renderItems(initialCardsFromServer);
});

const popupUpdateAvatar = new PopupWithForm(
  {
    handleSubmitForm: (item) => {
      submitUpdateAvatarButton.textContent = "Сохранение...";
      api.saveAvatar(item).then(data => {
        userInfo.setUserAvatar(data);
      }).finally(() => {
        popupUpdateAvatar.close();
        updateAvatarFormValidator.updateValidation();
        submitUpdateAvatarButton.textContent = "Сохранить";
      });
    },
  },
  popupUpdateAvatarSelector,
);

const popupEditProfile = new PopupWithForm(
  {
    handleSubmitForm: (item) => {
      submitEditProfileButton.textContent = "Сохранение...";
      api.saveUserInfo(item).then((data) => {
        userInfo.setUserInfo(data);
      }).finally(() => {
        popupEditProfile.close();
        submitEditProfileButton.textContent = "Сохранить";
      });
    },
  },
  popupEditProfileSelector
);

const popupAddCard = new PopupWithForm(
  {
    handleSubmitForm: (item) => {
      submitAddCardButton.textContent = "Сохранение...";
      api.saveCard(item).then((data) => {
        cardsList.addItemPrepend(createCard(data));
      }).finally(() => {
        popupAddCard.close();
        submitAddCardButton.textContent = "Создать"
      });
    },
  },
  popupAddCardSelector
);

const createCard = (data) => {
  const card = new Card(
    {
      data,
      userID,
      handleCardClick: (itemImage) => {
        popupImage.open(itemImage);
      },
      handleCardDelete: () => {
        poopupDeleteCard.open();
        poopupDeleteCard.setSubmitAction(() => {
          api.deleteCard(card).then(() => {
            card.deleteCard();
          });
          poopupDeleteCard.close();
        });
      },
      handleLikeClick: (isLiked) => {
        if (!isLiked) {
          api.setLike(card).then((res) => {
            card.updateLikes(res);
          });
        } else {
          api.deleteLike(card).then((res) => {
            card.updateLikes(res);
          });
        }
      },
    },
    cardsTemplateSelector
  );

  return card.getCardElement();
};

const enableValidation = () => {
  editProfileFormValidator.enableValidation();
  updateAvatarFormValidator.enableValidation();
  addCardFormValidator.enableValidation();
};

popupUpdateAvatar.setEventListeners();
poopupDeleteCard.setEventListeners();
popupEditProfile.setEventListeners();
popupImage.setEventListeners();
popupAddCard.setEventListeners();

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener("click", () => {
  editProfileFormValidator.updateValidation();
  const info = userInfo.getUserInfo();
  personNameInput.value = info.name;
  personJobInput.value = info.job;
  popupEditProfile.open();
});

openAddCardButton.addEventListener("click", () => {
  addCardFormValidator.updateValidation();
  popupAddCard.open();
});

openUpdateAvatarButton.addEventListener("click", () => {
  updateAvatarFormValidator.updateValidation();
  popupUpdateAvatar.open();
});

enableValidation();
