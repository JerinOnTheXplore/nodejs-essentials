//Encrypting and Decrypting Data with the crypto Module
/*
node.js er crypto module use kore text encrypt / decrypt kora jay..
** encryption mane data k emon vabe lukano jate onno kew porte na pare
** decryption holo sei lukano data k ager moto kore pawa
*/
const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);//randomly generated 32 bytes
const iv = crypto.randomBytes(16);//IV= Initialization Vector..eta encryption shuru korar starting point

//key+iv chara enrypted data decrypt kora jayna

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);//createCipheriv() diye ekti encryption engine tori kora hoise
  let encrypted = cipher.update(text, "utf-8", "hex");//cipher.update() => plain text theke encrypted data banay..
  encrypted += cipher.final("hex");//output format = "hex"

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
  };
}

function decrypt(encryptedData, ivHex) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(ivHex, "hex")
  );//decryption engine toiri hoy
  let decrypted = decipher.update(encryptedData, "hex", "utf-8");//encrypted hex data => utf-8 e convert kora hoy
  decrypted += decipher.final("utf-8");//sob seshe final decrypted string pai
  return decrypted;
}

console.log("Encrypted Data : ");
const sensitiveData = "My credit card: 4242 4242 4242 4242";
console.log("original data : ", sensitiveData);

const encrypted = encrypt(sensitiveData);
console.log("Encrypted : ", encrypted);

console.log("Decrypted data : ");
const decrypted = decrypt(encrypted.encryptedData, encrypted.iv);
console.log("Decrypted : ", decrypted);
console.log("match : ", sensitiveData === decrypted);