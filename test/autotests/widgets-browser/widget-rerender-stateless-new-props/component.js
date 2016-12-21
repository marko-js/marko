module.exports = {
	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	}
};