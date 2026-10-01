// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_await($scope4_id, "#text/0", resolveAfter("inner", 1), (x) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_escape(x)}</span>`);
			}, 0);
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`inner loading ${_escape((() => {
				throw new Error("inner placeholder");
			})())}`);
		}, void 0, "__tests__/template.marko_5*content");
		_await($scope1_id, "#text/1", resolveAfter("outer", 2), (y) => {
			const $scope7_id = _scope_id();
			_html(`<div>${_escape(y)}</div>`);
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("outer loading");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`caught ${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "5:4");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content");
}, 1);
