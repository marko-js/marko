// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("outer", 1), (outer) => {
			const $scope3_id = _scope_id();
			_html(_escape(outer));
			_try($scope3_id, "b", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "a", resolveAfter("inner", 2), (inner) => {
					_scope_id();
					_html(_escape(inner));
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading inner");
			}, void 0, "a0");
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading outer");
	}, void 0, "a1");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		_await($scope7_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, void 0, (err) => {
		const $scope8_reason = _scope_reason(), $wg__err_message = _write_guard($scope8_reason, 0);
		const $scope8_id = _scope_id();
		_html(`caught ${_text_resume($scope8_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope8_reason, 0) && _scope($scope8_id, {});
	}, void 0, "a2");
}, 1);
