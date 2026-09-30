// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>always</div>");
	_html("<t hidden><div>never visible</div></t>");
}, 1);
