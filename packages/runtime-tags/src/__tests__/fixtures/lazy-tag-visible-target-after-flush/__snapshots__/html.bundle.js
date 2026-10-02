// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>child ${_text_resume($scope0_id, "a", input.value, $wg__input_value * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "visible",
	selector: "#footer"
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_value << 1);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(0, 4), () => {
			_scope_id();
			_html("<footer id=footer>late</footer>");
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, void 0, "b0");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
