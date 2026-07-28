// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const arrA = [
		1,
		2,
		3
	];
	_html_opens("__tests__/template.marko:3:1"), _html("<div>");
	forOf(arrA, (val) => {
		const $scope1_id = _scope_id();
		_html_opens("__tests__/template.marko:5:5"), _html(`<div>${_escape(val)}</div>`);
	});
	_html_opens("__tests__/template.marko:9:1"), _html("</div><div>");
	forOf(arrA, (val) => {
		const $scope2_id = _scope_id();
		_html_opens("__tests__/template.marko:11:5"), _html(`<div>${_escape(val)}</div>`);
	});
	_html_opens("__tests__/template.marko:13:3"), _html("<div></div></div>");
}, 1);
