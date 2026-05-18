// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_await($scope0_id, "a", resolveAfter("b", 1), (result1) => {
		const $scope1_id = _scope_id();
		_html(_escape(result1));
		_await($scope1_id, "b", resolveAfter("c", 2), (result2) => {
			const $scope2_id = _scope_id();
			_html(_escape(result2));
			_await($scope2_id, "b", resolveAfter("d", 3), (result3) => {
				_scope_id();
				_html(_escape(result3));
			}, 0);
			_html("e");
		}, 0);
		_html("f");
	}, 0);
	_html("g");
	_await($scope0_id, "b", resolveAfter("h", 1), (result4) => {
		const $scope4_id = _scope_id();
		_html(_escape(result4));
		_await($scope4_id, "b", resolveAfter("i", 2), (result5) => {
			const $scope5_id = _scope_id();
			_html(_escape(result5));
			_await($scope5_id, "b", resolveAfter("j", 3), (result6) => {
				_scope_id();
				_html(_escape(result6));
			}, 0);
			_html("k");
		}, 0);
		_html("l");
	}, 0);
	_html("m");
}, 1);
