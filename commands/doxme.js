module.exports = {
	name: 'doxme',
	description: 'Get your info',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};