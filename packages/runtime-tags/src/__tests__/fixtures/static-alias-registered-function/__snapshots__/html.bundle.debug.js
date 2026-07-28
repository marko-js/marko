// template.marko
function base(message) {
	return message.toUpperCase() + "!";
}
_resume(base, "__tests__/template.marko_0/base");
const alias = base;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let fn = alias;
	let message = "Hello";
	_html_opens("__tests__/template.marko:6:1", "__tests__/template.marko:7:1"), _html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<div>${_escape(message)}${_el_resume($scope0_id, "#text/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		fn,
		message
	}, "__tests__/template.marko", 0, {
		fn: "4:6",
		message: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
