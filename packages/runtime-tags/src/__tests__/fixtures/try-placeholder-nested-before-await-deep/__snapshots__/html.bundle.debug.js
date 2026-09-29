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
			_try($scope3_id, "#text/0", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_await($scope5_id, "#text/0", resolveAfter("3", 2), (x) => {
					const $scope7_id = _scope_id();
					_html(`<span>${_escape(x)}</span>`);
				}, 0);
			}, () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html("3 loading");
			}, void 0, "__tests__/template.marko_6*content");
			_await($scope3_id, "#text/1", resolveAfter("2", 3), (x) => {
				const $scope8_id = _scope_id();
				_html(`<b>${_escape(x)}</b>`);
			}, 0);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("2 loading");
		}, void 0, "__tests__/template.marko_4*content");
		_await($scope1_id, "#text/1", resolveAfter("1", 1), (x) => {
			const $scope9_id = _scope_id();
			_html(`<div>${_escape(x)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("1 loading");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
