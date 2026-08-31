// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("__tests__/tags/greeting.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.message, _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/greeting.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = "hello";
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message: shout(message) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		message,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { message: "3:6" });
	_resume_branch($scope0_id);
}, 1);
