//unsafe password generation logic in a public repo :D

export default function generatePassword(passwordLength: number) {
  let characters: string = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = '';

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
   }
   return password;
} 


