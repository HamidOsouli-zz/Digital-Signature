# Digital Signature using Node.js, Crypto

This is a simple implementation of Digital Signature using Public Key Cryptography and Crypto

### Usage

```sh
$ npm run generate
# This will generate public and private keys into the keys folder
```

```sh
$ npm run sign
# This will sign a document using RSA-SHA256 algorithm with privateKey and creates signatures into the signatures folder
```

```sh
$ npm run verify
# This will verify a signature with public key
```

```sh
$ npm run qr
# This will generate QR from signatures
```