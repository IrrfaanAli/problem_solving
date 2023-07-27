
function getRandomCharacter(characterSet) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet[randomIndex];
  }

function RandomPassword (value){

    let len = value;
    let password = [];
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + digits + specialCharacters;


  password.push(getRandomCharacter(uppercaseLetters));
  password.push(getRandomCharacter(lowercaseLetters));
  password.push(getRandomCharacter(digits));
  password.push(getRandomCharacter(specialCharacters));


  for (let i = 4; i < len; i++) {
    password.push(getRandomCharacter(allCharacters));
  }

  password.sort(() => Math.random() - 0.5);

  return password.join('');
}

let result = RandomPassword(6);

console.log(result);