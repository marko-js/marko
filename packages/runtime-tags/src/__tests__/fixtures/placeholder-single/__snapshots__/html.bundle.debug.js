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
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("_A_");
	}, void 0, "__tests__/template.marko_2*content");
	_html("e");
	_await($scope0_id, "#text/1", resolveAfter("f", 1), (data) => {
		const $scope4_id = _scope_id();
		_html(_escape(data));
	}, 0);
	_html("g");
}, 1);
