// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("b");
		_await($scope1_id, "a", resolveAfter("c", 2), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
		_html("d");
		_try($scope1_id, "b", _content_resume("a1", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_html("e");
			_await($scope4_id, "a", resolveAfter("f", 3), (data) => {
				_scope_id();
				_html(_escape(data));
			}, 0);
			_html("g");
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("_A_");
		}, $scope1_id) }) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("_B_");
	}, $scope0_id) }) });
	_html("h");
	_await($scope0_id, "b", resolveAfter("i", 1), (data) => {
		_scope_id();
		_html(_escape(data));
	}, 0);
	_html("j");
}, 1);
