// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("b");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (error) => {
		_scope_reason();
		_scope_id();
		_html("ERROR!");
	}, $scope0_id) }) });
	_html("c");
}, 1);
