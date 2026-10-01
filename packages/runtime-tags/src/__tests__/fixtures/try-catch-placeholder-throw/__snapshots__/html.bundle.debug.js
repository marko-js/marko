// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("body", 1), (value) => {
			const $scope4_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`loading ${_escape((() => {
			throw new Error("placeholder");
		})())}`);
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`caught ${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "7:4");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content");
}, 1);
