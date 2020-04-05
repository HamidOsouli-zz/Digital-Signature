const crypto = require('crypto');
const fs = require('fs');

const private_key = fs.readFileSync('keys/privateKey.pem', 'utf-8');

// File to be signed
const doc = fs.readFileSync('documents/docToSign.txt');

const doc2 = fs.readFileSync('documents/docToSign2.txt');

// Signing
let signer = crypto.createSign('RSA-SHA256');
signer.write(doc);
signer.end();
let signature = signer.sign(private_key, 'base64');

console.log('Digital Signature: ', signature);

fs.writeFileSync('signatures/signature.txt', signature);
signer = crypto.createSign('RSA-SHA256');
signer.write(doc2);
signer.end();

signature = signer.sign(private_key, 'base64');

console.log('Digital Signature: ', signature);

// Write signature to the file `signature2.txt`
fs.writeFileSync('signatures/signature2.txt', signature);