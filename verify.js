const crypto = require('crypto');
const fs = require('fs');

const public_key = fs.readFileSync('keys/publicKey.pem', 'utf-8');

const signature = fs.readFileSync('signatures/signature.txt', 'utf-8');
const signature2 = fs.readFileSync('signatures/signature2.txt', 'utf-8');

// File to be verified
const doc = fs.readFileSync('documents/docToSign.txt');
const doc2 = fs.readFileSync('documents/docToSign2.txt');

// Verify
const verifier = crypto.createVerify('RSA-SHA256');
verifier.write(doc);
verifier.end();
const verifier2 = crypto.createVerify('RSA-SHA256');
verifier2.write(doc2);
verifier2.end();

const result = verifier.verify(public_key, signature, 'base64');
const result2 = verifier2.verify(public_key, signature2, 'base64');

console.log('Digital Signature Verification : ' ,result, result2);