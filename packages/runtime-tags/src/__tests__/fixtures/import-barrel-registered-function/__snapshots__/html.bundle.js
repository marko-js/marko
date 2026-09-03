// tags/extras.marko
function gamma(message) {
	return message + "-g";
}
var extras_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
});

// tags/handlers.marko
function beta(message) {
	return message + "-b";
}
var handlers_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
});

// tags/barrel.marko
var barrel_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
});

// template.marko
_resume(beta, "d1");
_resume(gamma, "c0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let first = beta;
	let second = gamma;
	let message = "start";
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<div>${_text_resume($scope0_id, "b", message)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: first,
		d: second,
		e: message
	});
}, 1);
