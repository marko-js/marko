// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", _content("a1", () => {
		_scope_id();
		_scope_reason();
		_html("b");
	}), { placeholder: attrTag({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("_A_");
	}) }) }, 0);
	_html("c");
	_await($scope0_id, "b", resolveAfter("d", 1), (data) => {
		_scope_id();
		_html(_escape(data));
	}, 0);
	_html("e");
}, 1);
