// template.marko
function base(message) {
	return message.toUpperCase() + "!";
}
_resume(base, "a0");
const alias = base;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let fn = alias;
	let message = "Hello";
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<div>${_text_resume($scope0_id, "b", message)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: fn,
		d: message
	});
	_resume_branch($scope0_id);
}, 1);
