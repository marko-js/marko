// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("outer", 1), (outer) => {
			const $scope3_id = _scope_id();
			_html(_escape(outer));
			_try($scope3_id, "#text/1", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "#text/0", resolveAfter("inner", 2), (inner) => {
					const $scope6_id = _scope_id();
					_html(_escape(inner));
				}, 0);
			}, () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("loading inner");
			}, void 0, "__tests__/template.marko_5*content");
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading outer");
	}, void 0, "__tests__/template.marko_2*content");
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		_await($scope7_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (value) => {
			const $scope9_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, void 0, (err) => {
		const $scope8_reason = _scope_reason(), $wg__err_message = _write_guard($scope8_reason, 0);
		const $scope8_id = _scope_id();
		_html(`caught ${_text_resume($scope8_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope8_reason, 0) && _scope($scope8_id, {}, "__tests__/template.marko", "15:4");
	}, void 0, "__tests__/template.marko_8*content");
}, 1);
