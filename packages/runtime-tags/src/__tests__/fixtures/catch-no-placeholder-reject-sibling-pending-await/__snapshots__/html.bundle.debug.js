// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("Success", 2), (msg) => {
			const $scope3_id = _scope_id();
			_html(_escape(msg));
		}, 0);
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason(), $wg__error_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`Caught: ${_text_resume($scope2_id, "#text/0", error.message, $wg__error_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "7:4");
	}, void 0, "__tests__/template.marko_2*content");
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "#text/0", rejectAfter(new Error("Failure"), 1), (msg) => {
			const $scope6_id = _scope_id();
			_html(_escape(msg));
		}, 0);
	}, void 0, (error) => {
		const $scope5_reason = _scope_reason(), $wg__error_message2 = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`Caught: ${_text_resume($scope5_id, "#text/0", error.message, $wg__error_message2 * 2)}`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "13:4");
	}, void 0, "__tests__/template.marko_5*content");
}, 1);
