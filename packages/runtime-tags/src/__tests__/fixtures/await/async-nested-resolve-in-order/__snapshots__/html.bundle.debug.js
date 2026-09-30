// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_await($scope0_id, "#text/0", resolveAfter("b", 1), (result1) => {
		const $scope1_id = _scope_id();
		_html(_escape(result1));
		_await($scope1_id, "#text/1", resolveAfter("c", 2), (result2) => {
			const $scope2_id = _scope_id();
			_html(_escape(result2));
			_await($scope2_id, "#text/1", resolveAfter("d", 3), (result3) => {
				const $scope3_id = _scope_id();
				_html(_escape(result3));
			}, 0);
			_html("e");
		}, 0);
		_html("f");
	}, 0);
	_html("g");
	_await($scope0_id, "#text/1", resolveAfter("h", 1), (result4) => {
		const $scope4_id = _scope_id();
		_html(_escape(result4));
		_await($scope4_id, "#text/1", resolveAfter("i", 2), (result5) => {
			const $scope5_id = _scope_id();
			_html(_escape(result5));
			_await($scope5_id, "#text/1", resolveAfter("j", 3), (result6) => {
				const $scope6_id = _scope_id();
				_html(_escape(result6));
			}, 0);
			_html("k");
		}, 0);
		_html("l");
	}, 0);
	_html("m");
}, 1);
