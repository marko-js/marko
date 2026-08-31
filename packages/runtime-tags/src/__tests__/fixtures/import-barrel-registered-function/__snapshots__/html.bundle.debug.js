// tags/extras.marko
function gamma(message) {
	return message + "-g";
}
var extras_default = _template("__tests__/tags/extras.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
});

// tags/handlers.marko
function alpha(message) {
	return message + "-a";
}
function beta(message) {
	return message + "-b";
}
var handlers_default = _template("__tests__/tags/handlers.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
});

// tags/barrel.marko
var barrel_default = _template("__tests__/tags/barrel.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
});

// template.marko
_resume(beta, "__tests__/tags/handlers.marko_0/export/beta");
_resume(gamma, "__tests__/tags/extras.marko_0/export/gamma");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let first = beta;
	let second = gamma;
	let message = "start";
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<div>${_text_resume($scope0_id, "#text/1", message)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		first,
		second,
		message
	}, "__tests__/template.marko", 0, {
		first: "3:6",
		second: "4:6",
		message: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
