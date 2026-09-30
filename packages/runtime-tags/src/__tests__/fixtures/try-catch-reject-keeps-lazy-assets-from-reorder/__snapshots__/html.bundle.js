// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $sg__input_value)}</span>`);
	_script($scope0_id, "a0", $sg__input_value);
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
		_await($scope1_id, "a", resolveAfter("body", 1), (v) => {
			_scope_id();
			$Child_withLoadAssets({ value: v });
		}, 0);
		_await($scope1_id, "b", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		$Child_withLoadAssets({ value: "catch" });
		_html(` caught ${_text_resume($scope3_id, "c", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "b0", "b1");
}, 1);
