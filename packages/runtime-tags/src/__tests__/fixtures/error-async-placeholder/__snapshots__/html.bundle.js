// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("content", 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", resolveAfter("placeholder", 2), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, void 0, "a0");
}, 1);
