// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var handlers_default = _template("__tests__/tags/handlers.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.message)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/handlers.marko", 0);
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
	_dynamic_tag($scope0_id, "#text/2", handlers_default, { message });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		loud,
		quiet,
		message
	}, "__tests__/template.marko", 0, {
		loud: "6:6",
		quiet: "7:6",
		message: "8:6"
	});
	_resume_branch($scope0_id);
}, 1);
