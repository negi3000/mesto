let popupEdit = document.querySelector('.popup-edit-profile');
let openPopupEditBtn = document.querySelector('.profile__edit-button');
let closePopupEditBtn = popupEdit.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = popupEdit.querySelector('.popup__input_type_name');
let jobInput = popupEdit.querySelector('.popup__input_type_job');
let formElement = document.querySelector('.popup-edit-profile');
let popupAdd = document.querySelector('.popup-add-place');
let openPopupAddBtn = document.querySelector('.profile__add-button');
let closePopupAddBtn = popupAdd.querySelector('.popup__close-button');
let popupAddName = popupAdd.querySelector('.popup__input_type_place-name');
let popupAddLink = popupAdd.querySelector('.popup__input_type_image-link');

function popupEditToggle() {
    popupEdit.classList.toggle('popup_visible');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function formEditSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupEditToggle();
}

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

initialCards.forEach( item =>{
    let cards = document.querySelector('.cards');
    let cardTemplate = document.querySelector('.card-template').content;
    let card = cardTemplate.cloneNode(true);
    let cardTitle = card.querySelector('.card__title');
    let cardLink = card.querySelector('.card__image');
    cardTitle.textContent = item.name;
    cardLink.src = item.link;
    
    cards.append(card)
})

function popupAddToggle () {
    popupAdd.classList.toggle('popup_visible');
}

function formAddSubmitHandler (evt) {
    evt.preventDefault();
    cardTitle.value = popupAddName.textContent;
    cardLink.src.value = popupAddLink.textContent;
    popupAddToggle()
}

popupAdd.addEventListener('submit', formAddSubmitHandler)

openPopupAddBtn.addEventListener('click', popupAddToggle);
closePopupAddBtn.addEventListener('click', popupAddToggle);

openPopupEditBtn.addEventListener('click', popupEditToggle);
closePopupEditBtn.addEventListener('click', popupEditToggle);
formElement.addEventListener('submit', formEditSubmitHandler);