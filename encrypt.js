var aesjs = require('aes-js');

var args = process.argv.slice(2);

if (args.length != 2) {
	console.log('Usage: node encrypt.js <plain text key> <plain text content>');
	process.exit(1);
}

var keyText = args[0];
var text = args[1];

var key = aesjs.utils.utf8.toBytes(keyText);
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
var encryptedBytes = aesCtr.encrypt(textBytes);
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log('Encrypted HEX: ' + encryptedHex);

var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
var decryptedBytes = aesCtr.decrypt(encryptedBytes);
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log('Decrypted text: ' + decryptedText);


