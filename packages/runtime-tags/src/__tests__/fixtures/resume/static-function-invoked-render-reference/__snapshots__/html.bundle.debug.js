// template.marko
function getAnswer() {
	return 42;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(getAnswer())}</div>`);
}, 1);
