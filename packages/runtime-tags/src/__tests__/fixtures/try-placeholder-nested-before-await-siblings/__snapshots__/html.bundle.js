// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("a inner", 1), (x) => {
				_scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("a inner loading");
		}, void 0, "a0");
		_await($scope1_id, "b", resolveAfter("a", 3), (y) => {
			_scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("a loading");
	}, void 0, "a1");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		_try($scope7_id, "a", () => {
			_scope_reason();
			const $scope9_id = _scope_id();
			_await($scope9_id, "a", resolveAfter("b inner", 4), (x) => {
				_scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("b inner loading");
		}, void 0, "a2");
		_await($scope7_id, "b", resolveAfter("b", 2), (y) => {
			_scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("b loading");
	}, void 0, "a3");
}, 1);
