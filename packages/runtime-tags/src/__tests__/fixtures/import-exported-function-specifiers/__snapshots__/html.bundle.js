// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var handlers_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.message, _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
_resume(shout, "b0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loud = shout;
	let quiet = shout;
	let message = "Hello";
	_html(`<button>${_escape("static")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", handlers_default, { message });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: loud,
		e: quiet,
		f: message
	});
	_resume_branch($scope0_id);
}, 1);
