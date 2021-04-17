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
const cardTemplate = document.querySelector('.card-template').content;
const formAdd = popupAdd.querySelector('.popup__form_type_add');


function closePopup(item) {
  item.classList.remove('popup_visible');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOverlay);  
}

function openPopup(item) {
  item.classList.add('popup_visible');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);  
}

function handlePopupAdd() {
  formAdd.reset();
  clearInputError();
  openPopup(popupAdd);
}

function togglePopupEdit() {    
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    clearInputError();
    openPopup(popupEdit);
}

function handleFormEditSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;    
    closePopup(popupEdit);
}

function closePopupEsc(evt){
  if (evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_visible');
    closePopup(openedPopup);
  }
}

function closePopupOverlay(evt){
  if (evt.target.classList.contains('popup')){
    const openedPopup = document.querySelector('.popup_visible');
    closePopup(openedPopup);
  }
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

function createCard(item) {    
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
      openPopup(popupPhoto) 
    }

    cardImage.addEventListener('click', popupPhotoHandler);
    cardLikeButton.addEventListener('click', handleCardLike);
    cardDeleteButton.addEventListener('click', handleCardDelete);
    
    return card;
}

function handleCardDelete(evt){
  evt.target.closest('.card').remove()
}

function handleCardLike(evt) {
  evt.target.classList.toggle('card__like-button_active')
}

initialCards.map( item =>{
  const initialCard = createCard(item)
  cards.append(initialCard)
})

// function togglePopupAdd () {
//     popupAdd.classList.toggle('popup_visible');
// }

function handleFormAddSubmit (evt) {
    evt.preventDefault();
    const newCard = createCard({
      name: popupAddName.value,
      link: popupAddLink.value})

    cards.prepend(newCard)

    closePopup(popupAdd)
}

// const cardLikeButton = cards.querySelector('.card__like-button');
// const cardDeleteButton = cards.querySelector('.card__delete-button');

// cardLikeButton.addEventListener('click', console.log('c'));
// cardDeleteButton.addEventListener('click', handleCardDelete);

popupPhotoCloseBtn.addEventListener('click',() => closePopup(popupPhoto));
popupAdd.addEventListener('submit', handleFormAddSubmit)

openPopupAddBtn.addEventListener('click', handlePopupAdd);
closePopupAddBtn.addEventListener('click', () => closePopup(popupAdd));

openPopupEditBtn.addEventListener('click', togglePopupEdit);
closePopupEditBtn.addEventListener('click', () => closePopup(popupEdit));
formElement.addEventListener('submit', handleFormEditSubmit);