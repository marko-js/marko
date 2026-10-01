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
		_scope_id();
		const x = (() => {
			throw new Error("bang");
		})();
		_html(_escape(x));
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`caught ${_text_resume($scope3_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "a0", "a1");
}, 1);
