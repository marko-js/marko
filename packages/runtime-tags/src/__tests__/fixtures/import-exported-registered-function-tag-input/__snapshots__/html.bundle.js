// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var handlers_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
});

// tags/press.marko
var press_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "quiet";
	_html(`<button>press</button>${_el_resume($scope0_id, "a")}<div>${_escape(label)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "c0");
	writeScope($scope0_id, {
		d: input,
		e: label
	});
	_resume_branch($scope0_id);
});

// template.marko
_resume(shout, "b0");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	press_default({ format: shout });
}, 1);
