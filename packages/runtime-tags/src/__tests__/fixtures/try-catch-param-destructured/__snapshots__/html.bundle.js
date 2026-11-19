// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("boom")), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, void 0, ({ message }) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_mark($scope2_id, "a", message, _write_guard($scope2_reason, 0))}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, 0, "a0");
}, 1);
