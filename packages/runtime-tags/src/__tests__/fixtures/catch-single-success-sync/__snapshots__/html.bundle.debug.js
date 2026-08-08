// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("b");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (error) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("ERROR!");
	}, $scope0_id) }) });
	_html("c");
}, 1);
