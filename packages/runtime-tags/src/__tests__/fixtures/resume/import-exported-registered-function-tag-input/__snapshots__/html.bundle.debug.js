// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var handlers_default = _template("__tests__/tags/handlers.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
});

// tags/press.marko
var press_default = _template("__tests__/tags/press.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "quiet";
	_html(`<button>press</button>${_el_resume($scope0_id, "#button/0")}<div>${_text_resume($scope0_id, "#text/1", label)}</div>`);
	_script($scope0_id, "__tests__/tags/press.marko_0");
	_scope($scope0_id, {
		input,
		label
	}, "__tests__/tags/press.marko", 0, {
		input: 0,
		label: "1:6"
	});
});

// template.marko
_resume(shout, "__tests__/tags/handlers.marko_0/export/shout");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	press_default({ format: shout });
}, 1);
