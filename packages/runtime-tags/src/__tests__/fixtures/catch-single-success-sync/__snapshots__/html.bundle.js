// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", _content("a1", () => {
		_scope_id();
		_scope_reason();
		_html("b");
	}), { catch: attrTag({ content: _content("a0", (error) => {
		_scope_reason();
		_scope_id();
		_html("ERROR!");
	}) }) }, 0);
	_html("c");
}, 1);
