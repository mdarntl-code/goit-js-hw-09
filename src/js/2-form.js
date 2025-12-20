const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.email-input');
const textarea = document.querySelector('.message-textarea');

const saveData = localStorage.getItem(STORAGE_KEY);
if(saveData!==null){
  const parsedData = JSON.parse(saveData);
  formData.email = parsedData.email; 
  formData.message = parsedData.message; 
  input.value = parsedData.email;
  textarea.value = parsedData.message;
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  const value = evt.target.value;
  const name = evt.target.name;

  if (!name) {
    return;
  }
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  form.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
}
