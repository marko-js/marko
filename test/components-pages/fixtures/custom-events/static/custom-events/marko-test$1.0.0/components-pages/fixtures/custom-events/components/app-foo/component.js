$_mod.def("/marko-test$1.0.0/components-pages/fixtures/custom-events/components/app-foo/component", function(require, exports, module, __filename, __dirname) { module.exports = {
	onMount: function() {
		window.fooComponent = this;
		this.pressEvent = undefined;
	},

	handleButtonPress: function() {
		this.pressEvent = arguments;
	}
};
});