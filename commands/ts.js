module.exports = {
	name: 'ts',
	description: 'Weird stuff',
	args: true,
	execute(message, args) {
		if (args[0] === 'good' && args[1] === 'bot') {
			message.channel.send('UwU');
		}
		else if (args[0] === 'anime' && args[1] === 'is' && args[2] === 'real' && message.author.id === '852595527472382042') {
			message.channel.send('Don\'t be sad, papi. Your characters can always be real in the garden of your mind.');
		}
		else if (args[0] === 'hey') {
			if (message.author.id === '852595527472382042') {
				message.channel.send('Greetings creator!');
			}
			else {
				message.channel.send('(¬_¬ ) you are not my creator');
			}
		}
		else {
			message.channel.send('Idk man');
		}
	},
};