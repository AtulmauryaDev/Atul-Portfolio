// Find the HTML elements that JavaScript needs to update or validate.
const form = document.querySelector('#job-application-form');
const resumeInput = document.querySelector('#resume');
const fileName = document.querySelector('#file-name');
const introInput = document.querySelector('#cover_letter');
const charCount = document.querySelector('#char-count');
const formMessage = document.querySelector('#form-message');
const allowedExtensions = ['pdf', 'doc', 'docx'];
const maxFileSize = 5 * 1024 * 1024;

document.querySelector('#year').textContent = new Date().getFullYear();

function setError(field, text) {
  const error = document.querySelector(`#${field.id}-error`);
  if (error) error.textContent = text;
  field.setAttribute('aria-invalid', 'true');
}

// Remove the field error after the user corrects the value.
function clearError(field) {
  const error = document.querySelector(`#${field.id}-error`);
  if (error) error.textContent = '';
  field.removeAttribute('aria-invalid');
}

// Validate one field at a time. Return true only when it passes the checks.
function validateField(field) {
  clearError(field);

  if (field.id === 'consent' && !field.checked) {
    setError(field, 'Please confirm the information is accurate.');
    return false;
  }

  if (field.id === 'resume') {
    if (!field.files || field.files.length === 0) {
      setError(field, 'Please attach your resume.');
      return false;
    }
    const file = field.files[0];
    const extension = file.name.includes('.') ? file.name.split('.').pop().toLowerCase() : '';
    if (!allowedExtensions.includes(extension)) {
      setError(field, 'Choose a PDF, DOC, or DOCX file.');
      return false;
    }
    if (file.size > maxFileSize) {
      setError(field, 'The resume must be 5 MB or smaller.');
      return false;
    }
    return true;
  }

  if (field.required && !field.value.trim()) {
    setError(field, 'This field is required.');
    return false;
  }
  if (field.id === 'email' && field.value.trim() && !field.validity.valid) {
    setError(field, 'Enter a valid email address.');
    return false;
  }
  if (field.minLength > 0 && field.value.trim() && field.value.trim().length < field.minLength) {
    setError(field, `Enter at least ${field.minLength} characters.`);
    return false;
  }
  if (field.id === 'phone' && field.value.trim() && !/^[+()\d\s.-]{7,20}$/.test(field.value.trim())) {
    setError(field, 'Enter a valid phone number.');
    return false;
  }
  if (field.id === 'pincode' && field.value.trim() && !/^[a-zA-Z0-9 -]{3,12}$/.test(field.value.trim())) {
    setError(field, 'Enter a valid postal or PIN code.');
    return false;
  }
  return true;
}

const fieldsToValidate = [
  ...form.querySelectorAll('input[required], select[required], textarea[required]'),
  document.querySelector('#phone'),
  document.querySelector('#pincode')
];

fieldsToValidate.forEach((field) => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
  });
  field.addEventListener('change', () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
  });
});

resumeInput.addEventListener('change', () => {
  const file = resumeInput.files[0];
  fileName.textContent = file
    ? `${file.name} · ${(file.size / (1024 * 1024)).toFixed(2)} MB`
    : 'No file selected';
  validateField(resumeInput);
});

introInput.addEventListener('input', () => {
  charCount.textContent = introInput.value.length;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.hidden = true;
  formMessage.className = 'form-message';

  const results = fieldsToValidate.map(validateField);
  if (results.some((valid) => !valid)) {
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    formMessage.textContent = 'Please review the highlighted fields and try again.';
    formMessage.classList.add('error');
    formMessage.hidden = false;
    return;
  }

  formMessage.textContent = 'Your details passed the browser checks. This is a front-end demo, so your application has not been sent or saved. Connect a secure backend to receive real applications.';
  formMessage.classList.add('success');
  formMessage.hidden = false;
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
