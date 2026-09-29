// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter("a", 2), (a) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(a)}</p>`);
	}, 0);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_try($scope2_id, "#text/0", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_await($scope4_id, "#text/0", rejectAfter(new Error("inner"), 1), (x) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, void 0, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html("caught");
		}, void 0, "__tests__/template.marko_5*content");
		_await($scope2_id, "#text/1", resolveAfter("outer", 3), (y) => {
			const $scope7_id = _scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("outer loading");
	}, void 0, "__tests__/template.marko_3*content");
}, 1);
