// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html_opens("__tests__/template.marko:2:3"), _html("<div>always</div>");
	_html_opens("__tests__/template.marko:4:1", "__tests__/template.marko:5:3"), _html("<t hidden><div>never visible</div></t>");
}, 1);
