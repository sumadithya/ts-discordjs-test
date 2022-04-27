module.exports = {
	name: 'burn',
	description: 'Use this to permanently scar someone\'s life',
	execute(message) {
		if (!message.mentions.users.size) {
			message.channel.send('Burn whom? (mention em):').then(() => {
				const filter = m => message.author.id === m.author.id;

				message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
					.then(messages => {
						const taggedUser = messages.first().mentions.users.first();
						message.channel.send(`${taggedUser}, yo mama so fat mount everest tried to climb her`);
					})
					.catch(() => {
						message.channel.send('Not a valid input');
					});
			});
		}
		else {
			const taggedUser = message.mentions.users.first();
			message.channel.send(`${taggedUser}, yo mama so fat mount everest tried to climb her`);
		}

	},
};