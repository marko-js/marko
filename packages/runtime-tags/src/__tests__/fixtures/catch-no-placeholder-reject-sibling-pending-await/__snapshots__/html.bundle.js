// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("Success", 2), (msg) => {
			_scope_id();
			_html(_escape(msg));
		}, 0);
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason(), $wg__error_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`Caught: ${_text_resume($scope2_id, "a", error.message, $wg__error_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a0");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("Failure"), 1), (msg) => {
			_scope_id();
			_html(_escape(msg));
		}, 0);
	}, void 0, (error) => {
		const $scope5_reason = _scope_reason(), $wg__error_message2 = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`Caught: ${_text_resume($scope5_id, "a", error.message, $wg__error_message2 * 2)}`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, void 0, "a1");
}, 1);
