// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter("a inner", 1), (x) => {
				const $scope5_id = _scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("a inner loading");
		}, void 0, "__tests__/template.marko_4*content");
		_await($scope1_id, "#text/1", resolveAfter("a", 3), (y) => {
			const $scope6_id = _scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("a loading");
	}, void 0, "__tests__/template.marko_2*content");
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		_try($scope7_id, "#text/0", () => {
			_scope_reason();
			const $scope9_id = _scope_id();
			_await($scope9_id, "#text/0", resolveAfter("b inner", 4), (x) => {
				const $scope11_id = _scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, () => {
			_scope_reason();
			const $scope10_id = _scope_id();
			_html("b inner loading");
		}, void 0, "__tests__/template.marko_10*content");
		_await($scope7_id, "#text/1", resolveAfter("b", 2), (y) => {
			const $scope12_id = _scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		const $scope8_id = _scope_id();
		_html("b loading");
	}, void 0, "__tests__/template.marko_8*content");
}, 1);
