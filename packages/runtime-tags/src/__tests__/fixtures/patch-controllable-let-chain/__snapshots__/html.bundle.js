// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a4: "a4 !a2; b ;<input><input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.text;
			let b = a;
			_html(`<input${_patch_input_value($scope1_id, "a", a, _resume((_new_a) => {
				a = _new_a;
			}, "a0", $scope1_id), "n2a", (_mask_group($scope0_reason, 1) & 1) << 1, 0, "wEa", (_mask_group($scope0_reason, 1) & 1) << 1, 0)}>${_el_resume($scope1_id, "a")}<input${_patch_input_value($scope1_id, "b", b, _resume((_new_b) => {
				b = _new_b;
			}, "a1", $scope1_id), "n2b", 0, 0, "wEb", 0, 0)}>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a3");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a4"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.text }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.text, !_server_guard($scope0_reason, 1));
}, 1);
