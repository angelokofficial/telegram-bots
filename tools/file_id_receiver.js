console.log('Loading frameworks...')
var TelegramBot = require('node-telegram-bot-api');
console.log('Welcome :)\n');
var token = '';
var bot = new TelegramBot(token, {polling: true});

	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	var userid = msg.from.id;
	var messageId = typeof msg['message_id'];
	var photo = typeof msg['photo'];
	var document = typeof msg['document'];
	var sticker = typeof msg['sticker'];
	if (messageId == 'number') {
		bot.sendMessage(chatid, '\nmessage = ' + msg.message_id);
		console.log('message id was received');
	} else {
		console.log('\nskip message_id');
	} if (photo == 'object') {
		bot.sendMessage(chatid, 'photo = ' + msg['photo'][0]['file_id']);
		console.log('photo was received');
	} else {
		console.log('skip photo');
	} if (document == 'object') {
		bot.sendMessage(chatid, 'document = ' + msg.document.file_id);
		console.log('document was received');
	} else {
		console.log('skip document');
	} if (sticker == 'object') {
		bot.sendMessage(chatid, 'sticker = ' + msg.sticker.file_id);
		console.log('sticker was received\n');
	} else {
		console.log('skip sticker\n');
}});