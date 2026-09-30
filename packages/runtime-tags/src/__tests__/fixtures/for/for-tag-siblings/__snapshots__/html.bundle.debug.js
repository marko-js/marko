// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const arrA = [
		1,
		2,
		3
	];
	_html("<div>");
	forOf(arrA, (val) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(val)}</div>`);
	});
	_html("</div><div>");
	forOf(arrA, (val) => {
		const $scope2_id = _scope_id();
		_html(`<div>${_escape(val)}</div>`);
	});
	_html("<div></div></div>");
}, 1);
