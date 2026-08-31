// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const a = _hoist_read_error();
	const b = a;
	_html(`<div>${_escape(a)}${_escape(b)}</div>`);
	_scope($scope0_id, { a }, "__tests__/template.marko", 0, { a: "1:8" });
}, 1);
