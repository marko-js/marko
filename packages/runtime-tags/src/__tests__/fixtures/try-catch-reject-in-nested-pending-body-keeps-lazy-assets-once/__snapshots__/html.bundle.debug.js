// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "__tests__/child.marko_0_input_value#3", $wg__input_value);
	_scope($scope0_id, { input_value: input.value }, "__tests__/child.marko", 0, { input_value: ["input.value"] });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_try($scope3_id, "#text/0", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_await($scope5_id, "#text/0", resolveAfter("never shown", 3), (v) => {
					const $scope7_id = _scope_id();
					_html(_escape(v));
				}, 0);
			}, void 0, () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html("never caught");
			}, void 0, "__tests__/template.marko_6*content");
			$Child_withLoadAssets({ value: "body" });
			_await($scope3_id, "#text/3", rejectAfter(new Error("inner"), 1), (v) => {
				const $scope8_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message2 = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message2 * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "12:6");
		}, void 0, "__tests__/template.marko_4*content");
		_await($scope1_id, "#text/1", rejectAfter(new Error("outer"), 2), (v) => {
			const $scope9_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		$Child_withLoadAssets({ value: "catch" });
		_html(` caught ${_text_resume($scope2_id, "#text/2", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "15:4");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
