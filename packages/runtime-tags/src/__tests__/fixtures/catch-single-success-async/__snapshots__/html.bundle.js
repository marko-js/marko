// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("b");
		_await($scope1_id, "a", resolveAfter("c", 2), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
		_html("d");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (error) => {
		_scope_reason();
		_scope_id();
		_html("ERROR!");
	}, $scope0_id) }) });
	_html("f");
	_await($scope0_id, "b", resolveAfter("g", 1), (data) => {
		_scope_id();
		_html(_escape(data));
	}, 0);
	_html("h");
}, 1);
