(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n){var r=e.data,o=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._name=r.name,this._link=r.link,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_handleDeleteCard",value:function(){this._element.remove(),delete this._element}},{key:"_toggleLike",value:function(){this._buttonLike.classList.toggle("cards__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike=this._element.querySelector(".cards__like"),this._buttonDelete=this._element.querySelector(".cards__delete-button"),this._cardImage=this._element.querySelector(".cards__photo"),this._buttonDelete.addEventListener("click",(function(){return e._handleDeleteCard()})),this._buttonLike.addEventListener("click",(function(){return e._toggleLike()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick({name:e._name,link:e._link})}))}},{key:"getCardElement",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".cards__location").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._element=n}var t,r;return t=e,(r=[{key:"_showErrorMessage",value:function(e,t){var n=this._element.querySelector("#".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass)}},{key:"_hideErrorMessage",value:function(e){var t=this._element.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._config.inactiveButtonClass),t.setAttribute("disabled",!0)):(t.classList.remove(this._config.inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._element.querySelectorAll(this._config.inputSelector)),n=this._element.querySelector(this._config.submitButtonSelector);this._toggleButtonState(t,n),t.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButtonState(t,n)}))}))}},{key:"enableValidation",value:function(){this._element.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose.bind(this)),this._popup.addEventListener("click",this._handleClickOnOverlay.bind(this))}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose.bind(this)),this._popup.removeEventListener("click",this._handleClickOnOverlay.bind(this))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickOnOverlay",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()}))}}])&&o(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function c(e,t){var n,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t))._handleSubmitForm=r,n}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){this._popup.querySelector(".popup__form").reset(),a(p(c.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;a(p(c.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}}])&&u(t.prototype,n),c}(i),_=document.querySelector(".popup_type_edit-profile").querySelector(".popup__form"),d=document.querySelector(".popup_type_add-card").querySelector(".popup__form"),h=_.querySelector(".popup__input_el_name"),y=_.querySelector(".popup__input_el_job"),v=d.querySelector(".popup__input_el_place"),m=d.querySelector(".popup__input_el_link"),b=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),g=document.querySelector(".popup__photo"),S=document.querySelector(".popup__title-photo");function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(n=[{key:"open",value:function(e){g.src=e.link,g.alt=e.name,S.textContent=e.name,C(j(c.prototype),"open",this).call(this)}}])&&w(t.prototype,n),c}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"_clearContainer",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._clearContainer(),this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&I(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R,D=function(){function e(t){var n=t.personNameSelector,r=t.personJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._personNameElement=document.querySelector(n),this._personJobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._personNameElement.textContent,e.job=this._personJobElement.textContent,e}},{key:"setUserInfo",value:function(e){this._personNameElement.textContent=e.nameInput,this._personJobElement.textContent=e.jobInput}}])&&x(t.prototype,n),e}(),T=new Event("input"),V=new q(".popup_type_photo"),B=new D({personNameSelector:".profile__name",personJobSelector:".profile__job"}),A=new f({handleSubmitForm:function(e){B.setUserInfo(e),A.close()}},".popup_type_edit-profile"),M=new P({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return M.addItem(F(e))}},".cards__grid"),N=new f({handleSubmitForm:function(e){M.addItem(F({name:e.placeInput,link:e.linkInput})),N.close()}},".popup_type_add-card"),F=function(e){return new t({data:e,handleCardClick:function(e){V.open(e)}},".cards-template").getCardElement()};A.setEventListeners(),V.setEventListeners(),N.setEventListeners(),b.addEventListener("click",(function(){var e=B.getUserInfo();h.value=e.name,y.value=e.job,h.dispatchEvent(T),y.dispatchEvent(T),A.open()})),k.addEventListener("click",(function(){v.dispatchEvent(T),m.dispatchEvent(T),N.open()})),M.renderItems(),R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(R.formSelector)).forEach((function(e){new r(R,e).enableValidation()}))})();