let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');
let formElement = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('popup_visible');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
function closePopup() {
    popup.classList.remove('popup_visible');
}

openPopupBtn.addEventListener('click', function(){
    openPopup();
})

closePopupBtn.addEventListener('click', function (){
    closePopup();
})

formElement.addEventListener('submit', formSubmitHandler);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}



