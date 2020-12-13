import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDeleteCard from "../components/PopupConfirm.js";
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

import { renderLoading } from "../utils/utils.js";

const profileConfig = {
  token: "37682f5b-4bfd-4bac-9745-591da8798f65",
  cohortID: "cohort-18",
  baseURL: "https://mesto.nomoreparties.co",
};

let userID = null;

const editProfileFormValidator = new FormValidator(
  config,
  popupEditProfileSelector
);
const updateAvatarFormValidator = new FormValidator(
  config,
  popupUpdateAvatarSelector
);
const addCardFormValidator = new FormValidator(config, popupAddCardSelector);

const api = new Api(profileConfig);
const popupImage = new PopupWithImage(
  popupPhotoSelector,
  popupPhotoImage,
  popupPhotoTitle
);
const popupDeleteCard = new PopupDeleteCard(popupDeleteCardSelector);
const userInfo = new UserInfo({
  personNameSelector,
  personJobSelector,
  personAvatarSelector,
});

const cardsList = new Section(
  {
    renderer: (item) => cardsList.addItem(createCard(item)),
  },
  cardsContainerSelector
);

api
  .getAllNeededData()
  .then((args) => {
    const [userInfoFromServer, initialCardsFromServer] = args;
    userID = userInfoFromServer._id;
    userInfo.setUserAvatar(userInfoFromServer);
    userInfo.setUserInfo(userInfoFromServer);
    cardsList.renderItems(initialCardsFromServer.reverse());
  })
  .catch((err) => console.log(err));

const popupUpdateAvatar = new PopupWithForm(
  {
    handleSubmitForm: (item) => {
      renderLoading(true, submitUpdateAvatarButton, "Сохранение...")
      api
        .saveAvatar(item)
        .then((data) => {
          userInfo.setUserAvatar(data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          updateAvatarFormValidator.updateValidation();
          renderLoading(false, submitUpdateAvatarButton, "Сохранить");
          popupUpdateAvatar.close();
        });
    },
  },
  popupUpdateAvatarSelector
);

const popupEditProfile = new PopupWithForm(
  {
    handleSubmitForm: (item) => {
      renderLoading(true, submitEditProfileButton, "Сохранение...");
      api
        .saveUserInfo(item)
        .then((data) => {
          userInfo.setUserInfo(data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          renderLoading(false, submitEditProfileButton, "Сохранить")
          popupEditProfile.close();
        });
    },
  },
  popupEditProfileSelector
);

const popupAddCard = new PopupWithForm(
  {
    handleSubmitForm: (item) => {
      renderLoading(true, submitAddCardButton, "Сохранение...");
      api
        .saveCard(item)
        .then((data) => {
          cardsList.addItem(createCard(data));
        })
        .catch((err) => console.log(err))
        .finally(() => {
          renderLoading(false, submitAddCardButton, "Создать");
          popupAddCard.close();
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
        popupDeleteCard.open();
        popupDeleteCard.setSubmitAction(() => {
          api
            .deleteCard(card)
            .then(() => {
              card.deleteCard();
            })
            .catch((err) => console.log(err))
            .finally(() => popupDeleteCard.close());
        });
      },
      handleLikeClick: (isLiked) => {
        if (!isLiked) {
          api
            .setLike(card)
            .then((res) => {
              card.updateLikes(res);
            })
            .catch((err) => console.log(err));
        } else {
          api
            .deleteLike(card)
            .then((res) => {
              card.updateLikes(res);
            })
            .catch((err) => console.log(err));
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
popupDeleteCard.setEventListeners();
popupEditProfile.setEventListeners();
popupImage.setEventListeners();
popupAddCard.setEventListeners();

// Прикрепляем функции к кнопкам
openEditProfileButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  personNameInput.value = info.name;
  personJobInput.value = info.job;
  editProfileFormValidator.updateValidation();
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
