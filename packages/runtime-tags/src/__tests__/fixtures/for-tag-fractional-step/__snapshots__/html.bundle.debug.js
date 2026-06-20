// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	forTo(.3, 0, .1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>to: ${_escape(i.toFixed(1))}</li>`);
	});
	forUntil(2.1, 0, .15, (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>until: ${_escape(i.toFixed(2))}</li>`);
	});
	_html("</ul>");
}, 1);
