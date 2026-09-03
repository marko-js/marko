// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("__tests__/tags/greeting.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_message = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.message, $sg__input_message)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/greeting.marko", 0);
});

// tags/greetings.marko
var greetings_default = _template("__tests__/tags/greetings.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>greetings</div>");
});

// template.marko
_resume(shout, "__tests__/tags/greeting.marko_0/export/shout");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let format = shout;
	let message = "hello";
	_html(`<button>shout</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		format,
		message,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		format: "3:6",
		message: "4:6"
	});
}, 1);
