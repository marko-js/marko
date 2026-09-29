// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("b");
		_await($scope1_id, "a", resolveAfter("c", 2), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
		_html("d");
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("e");
			_await($scope4_id, "a", resolveAfter("f", 3), (data) => {
				_scope_id();
				_html(_escape(data));
			}, 0);
			_html("g");
		}, () => {
			_scope_reason();
			_scope_id();
			_html("_A_");
		}, void 0, "a0");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("_B_");
	}, void 0, "a1");
	_html("h");
	_await($scope0_id, "b", resolveAfter("i", 1), (data) => {
		_scope_id();
		_html(_escape(data));
	}, 0);
	_html("j");
}, 1);
