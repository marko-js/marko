// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: "a3,"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $fg__input_prefix = _filled_guard($scope0_reason, 5), $fg__input_x = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $fg__input_suffix = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const inner = input.prefix + input.x;
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xb", inner, !_server_guard($scope0_reason, 2));
			_patch_render($scope1_id, "a1", [_filled_guard($scope0_reason, 5) && ">e", _filled_guard($scope0_reason, 6) && ">f"], $scope0_reason, 2);
			_script($scope1_id, "a0", 0, (_filled_guard($scope0_reason, 7) || _filled_guard($scope0_reason, 2)) && (_client_guard($scope0_reason, 7) || _client_guard($scope0_reason, 2) ? 2 : 1), [_filled_guard($scope0_reason, 7) && ">g", _filled_guard($scope0_reason, 2) && "b"], "a2", $scope0_reason, 3);
			_scope($scope1_id, {
				b: inner,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 4);
	$fg__input_prefix && $cg__input_show && _patch_render($scope0_id, "a4", "e");
	$fg__input_x && $cg__input_show && _patch_render($scope0_id, "a5", "f");
	$fg__input_suffix && $cg__input_show && _patch_render($scope0_id, "a6", "g");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.prefix,
		f: _write_if($scope0_reason, 0) && input.x,
		g: input.suffix
	}) || ($fg__input_prefix && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.prefix, !_server_guard($scope0_reason, 5)), $fg__input_x && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 6)), $fg__input_suffix && _patch_write($scope0_id, "xg", input.suffix, !_server_guard($scope0_reason, 7)));
}, 1);
