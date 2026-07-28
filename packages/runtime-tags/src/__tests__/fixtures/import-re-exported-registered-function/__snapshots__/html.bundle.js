// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.message)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/greetings.marko
var greetings_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>greetings</div>");
});

// template.marko
_resume(shout, "b0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let format = shout;
	let message = "hello";
	_html(`<button>shout</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: format,
		d: message,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
