// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		const message = $global$1.settings.message;
		let clicked = false;
		_html(`<button>${_text_resume($scope2_id, "b", error.message)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a0");
		_scope($scope2_id, {
			e: error?.message,
			f: message,
			g: _write_if($scope2_reason, 0) && clicked
		});
	}, void 0, "a1");
}, 1);
