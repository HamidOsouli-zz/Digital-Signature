const fs = require('fs');
const qrcode = require('qrcode');

const signature = fs.readFileSync('signatures/signature.txt', 'utf-8');
const signature2 = fs.readFileSync('signatures/signature2.txt', 'utf-8');

generateQR();

async function generateQR() {
  const res = await qrcode.toDataURL(signature);
  fs.writeFileSync('./qr/qr.html', `<img src="${res}">`);
  const res2 = await qrcode.toDataURL(signature2);
  fs.writeFileSync('./qr/qr2.html', `<img src="${res2}">`);
}