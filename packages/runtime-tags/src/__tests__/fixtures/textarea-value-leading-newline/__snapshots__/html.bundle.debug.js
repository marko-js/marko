// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = "\nhello";
	_html(`<textarea>${_escape_textarea(value)}</textarea>`);
}, 1);
