// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var handlers_default = _template("__tests__/tags/handlers.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_message = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.message, $sg__input_message)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/handlers.marko", 0);
});

// template.marko
_resume(shout, "__tests__/tags/handlers.marko_0/export/shout");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loud = shout;
	let quiet = shout;
	let message = "Hello";
	const label = "static";
	_html(`<button>${_escape(label)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	handlers_default({ message });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		loud,
		quiet,
		message,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		loud: "6:6",
		quiet: "7:6",
		message: "8:6"
	});
}, 1);
