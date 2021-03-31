const popupEdit = document.querySelector('.popup-edit-profile');
const openPopupEditBtn = document.querySelector('.profile__edit-button');
const closePopupEditBtn = popupEdit.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup-edit-profile');
const popupAdd = document.querySelector('.popup-add-place');
const openPopupAddBtn = document.querySelector('.profile__add-button');
const closePopupAddBtn = popupAdd.querySelector('.popup__close-button');
const popupAddName = popupAdd.querySelector('.popup__input_type_place-name');
const popupAddLink = popupAdd.querySelector('.popup__input_type_image-link');
const cards = document.querySelector('.cards');
const popupPhoto = document.querySelector('.popup-photo-modal');
const popupImage = popupPhoto.querySelector('.popup__photo');
const popupPhotoTitle = popupPhoto.querySelector('.popup__description');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup__close-button');

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

function insertCard(item) {
    const cardTemplate = document.querySelector('.card-template').content;
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.card__title');    
    const cardLikeButton = card.querySelector('.card__like-button');
    const cardDeleteButton = card.querySelector('.card__delete-button');
    const cardImage = card.querySelector('.card__image');
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;
    
    function popupPhotoHandler(evt){
      popupImage.src= item.link;
      popupImage.alt = item.name;
      popupPhotoTitle.textContent = item.name;
      popupPhoto.classList.add('popup_visible');  
    }

    cardImage.addEventListener('click', popupPhotoHandler);
    cardLikeButton.addEventListener('click', cardLikeHandler);
    cardDeleteButton.addEventListener('click', cardDeleteHandler);
    
    return card;
}



function closePopupPhoto(evt){
  popupPhoto.classList.remove('popup_visible');
}

function cardDeleteHandler(evt){
  evt.target.closest('.card').remove()
}

function cardLikeHandler(evt) {
  evt.target.classList.toggle('card__like-button_active')
}

initialCards.map( item =>{
  const initialCard = insertCard(item)
  cards.append(initialCard)
})

function popupAddToggle () {
    popupAdd.classList.toggle('popup_visible');
}

function formAddSubmitHandler (evt) {
    evt.preventDefault();
    const newCard = insertCard({
      name: popupAddName.value,
      link: popupAddLink.value})

    cards.prepend(newCard)

    popupAddToggle()
}

// const cardLikeButton = cards.querySelector('.card__like-button');
// const cardDeleteButton = cards.querySelector('.card__delete-button');

// cardLikeButton.addEventListener('click', console.log('c'));
// cardDeleteButton.addEventListener('click', cardDeleteHandler);

popupPhotoCloseBtn.addEventListener('click', closePopupPhoto);
popupAdd.addEventListener('submit', formAddSubmitHandler)

openPopupAddBtn.addEventListener('click', popupAddToggle);
closePopupAddBtn.addEventListener('click', popupAddToggle);

openPopupEditBtn.addEventListener('click', popupEditToggle);
closePopupEditBtn.addEventListener('click', popupEditToggle);
formElement.addEventListener('submit', formEditSubmitHandler);