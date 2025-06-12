const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const submittedData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log('Form Gönderildi:', submittedData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
