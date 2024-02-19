export default function createRandomPW() {
  const num = '0123456789';
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const sym = '`~!@#$%^&*()_+=-{}[]:";<>,.?/|';
  const chars = num + alpha + cap + sym;
  let password = '';
  let randomNumber;
  randomNumber = Math.floor(Math.random() * cap.length);
  password += cap.substring(randomNumber, randomNumber + 1);
  randomNumber = Math.floor(Math.random() * num.length);
  password += num.substring(randomNumber, randomNumber + 1);
  randomNumber = Math.floor(Math.random() * alpha.length);
  password += alpha.substring(randomNumber, randomNumber + 1);
  randomNumber = Math.floor(Math.random() * sym.length);
  password += sym.substring(randomNumber, randomNumber + 1);
  for (let i = 0; i < 12; i++) {
    randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}
