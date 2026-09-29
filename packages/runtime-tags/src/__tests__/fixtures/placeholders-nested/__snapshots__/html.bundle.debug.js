// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("b");
		_await($scope1_id, "#text/0", resolveAfter("c", 2), (data) => {
			const $scope3_id = _scope_id();
			_html(_escape(data));
		}, 0);
		_html("d");
		_try($scope1_id, "#text/1", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("e");
			_await($scope4_id, "#text/0", resolveAfter("f", 3), (data) => {
				const $scope6_id = _scope_id();
				_html(_escape(data));
			}, 0);
			_html("g");
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html("_A_");
		}, void 0, "__tests__/template.marko_5*content");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("_B_");
	}, void 0, "__tests__/template.marko_2*content");
	_html("h");
	_await($scope0_id, "#text/1", resolveAfter("i", 1), (data) => {
		const $scope7_id = _scope_id();
		_html(_escape(data));
	}, 0);
	_html("j");
}, 1);
