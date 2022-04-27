module.exports = {
	name: 'args-info',
	description: 'Useful for args debugging',
	args: true,
	execute(message, args) {
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};