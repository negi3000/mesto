const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
}

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)

  errorElement.textContent = errorMessage
  errorElement.classList.add(validationConfig.errorClass)
  inputElement.classList.add(validationConfig.inputErrorClass)
}

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)

  errorElement.textContent = ''
  errorElement.classList.remove(validationConfig.errorClass) 
  inputElement.classList.remove(validationConfig.inputErrorClass)  
}

const clearInputError = () =>{ 
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach(formElement => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    inputList.forEach(inputElement => {
      hideInputError(formElement, inputElement, validationConfig);
    });
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);
  });
}



const checkInputValidity = (formElement, inputElement, validationConfig) => {
  const isInputValid = inputElement.validity.valid

  const errorMessage = inputElement.validationMessage

  if (!isInputValid){
    showInputError(formElement, inputElement, errorMessage, validationConfig)
  } else {
    hideInputError(formElement, inputElement, validationConfig)
  }
}

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  const hasNotValidInput = inputList.some((inputElement) =>
   !inputElement.validity.valid);

   if (hasNotValidInput) {
     buttonElement.setAttribute('disabled', true)
     buttonElement.classList.add(validationConfig.inactiveButtonClass)
   } else {
    buttonElement.removeAttribute('disabled', true)
    buttonElement.classList.remove(validationConfig.inactiveButtonClass)
   }
}


const setEventListeners = (formElement, validationConfig) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })

  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement, validationConfig)
      toggleButtonState(inputList, buttonElement, validationConfig) 
    })
  })
}


const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  
  formList.forEach(item => setEventListeners(item,validationConfig))
}

enableValidation(validationConfig)