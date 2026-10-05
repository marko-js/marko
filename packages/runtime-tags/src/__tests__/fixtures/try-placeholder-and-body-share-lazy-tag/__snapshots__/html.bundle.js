// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<pre id=log></pre>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("b", 1), (v) => {
			const $scope3_id = _scope_id();
			$Child_withLoadAssets({ value: v });
			_script($scope3_id, "b0", 0);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		$Child_withLoadAssets({ value: "p" });
	}, void 0, "b1");
}, 1);
