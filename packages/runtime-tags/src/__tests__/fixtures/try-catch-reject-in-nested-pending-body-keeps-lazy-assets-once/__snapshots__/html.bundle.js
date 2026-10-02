// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "a0", $wg__input_value);
	_scope($scope0_id, { d: input.value });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_try($scope3_id, "a", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_await($scope5_id, "a", resolveAfter("never shown", 3), (v) => {
					_scope_id();
					_html(_escape(v));
				}, 0);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("never caught");
			}, void 0, "b0");
			$Child_withLoadAssets({ value: "body" });
			_await($scope3_id, "d", rejectAfter(/* @__PURE__ */ new Error("inner"), 1), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message2 = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "a", err.message, $wg__err_message2 * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "b1");
		_await($scope1_id, "b", rejectAfter(/* @__PURE__ */ new Error("outer"), 2), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		$Child_withLoadAssets({ value: "catch" });
		_html(` caught ${_text_resume($scope2_id, "c", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "b2");
}, 1);
