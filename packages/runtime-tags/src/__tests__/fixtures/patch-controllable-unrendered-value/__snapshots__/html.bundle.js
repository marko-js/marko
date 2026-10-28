// template.marko
_shells({
	a: "a !a6; D l%;<button class=inc> </button><!><!>",
	a5: "a5 !a2; b ;<input class=b><input type=checkbox class=c>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "a", input.value, _resume(function(next) {
				console.log(next);
			}, "a0"), "n2a", $scope0_reason, 2, "wEa", $scope0_reason, 2)} class=b>${_el_resume($scope1_id, "a")}<input${_attr_input_checked($scope1_id, "b", input.flag, _resume(function(next) {
				console.log(next);
			}, "a1"), "n0b", $scope0_reason, 3, "wEb", $scope0_reason, 3)} type=checkbox class=c>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a5"], $scope0_reason, 1);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value,
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.flag,
		i: n
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va7", input.value, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va8", input.flag, !_server_guard($scope0_reason, 3)));
}, 1);
