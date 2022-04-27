module.exports = {
	name: 'prune',
	description: 'Deletes messages',
	args: true,
	execute(message, args) {
		const amount = parseInt(args[0]);

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount < 2 || amount > 50) {
			return message.reply('you need to input a number between 2 and 50.');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('oopsie woopsie there was a fucky wucky!');
		});
	},
};