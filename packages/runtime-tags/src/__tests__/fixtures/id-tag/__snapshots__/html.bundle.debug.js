// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const x = _id();
	const y = _id();
	_html(`<div>${_escape(x)} ${_escape(y)}</div>`);
}, 1);
