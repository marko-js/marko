// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forTo(.3, 0, .1, (n) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(n)}</div>`);
	});
	forUntil(5.1, 0, 1.7, (n) => {
		const $scope2_id = _scope_id();
		_html(`<span>${_escape(n)}</span>`);
	});
}, 1);
