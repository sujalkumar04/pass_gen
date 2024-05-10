
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const strengthValue = document.getElementById("strength-value");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let characters = "";

  if (uppercaseCheckbox.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowercaseCheckbox.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbersCheckbox.checked) {
    characters += "0123456789";
  }

  if (symbolsCheckbox.checked) {
    characters += "!@#$%^&*()_+-={}:<>?";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordInput.value = password;

  // Calculate password strength
  let strength = 0;
  if (uppercaseCheckbox.checked) strength += 26;
  if (lowercaseCheckbox.checked) strength += 26;
  if (numbersCheckbox.checked) strength += 10;
  if (symbolsCheckbox.checked) strength += 32;
  strengthValue.textContent = calculatePasswordStrength(password);
}

function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.match(/[A-Z]/)) strength += 26;
  if (password.match(/[a-z]/)) strength += 26;
  if (password.match(/[0-9]/)) strength += 10;
  if (password.match(/[!@#$%^&*()_+-={}:<>?]/)) strength += 32;
  return strength * password.length;
}