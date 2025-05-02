function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUpper = document.getElementById('includeUpper').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

    let allChars = lowerChars;
    if (includeUpper) allChars += upperChars;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    document.getElementById('password').value = password;
  }