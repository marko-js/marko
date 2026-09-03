// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_message = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.message, $sg__input_message)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = "hello";
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message: shout(message) });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: message,
		b: _existing_scope($childScope)
	});
}, 1);
