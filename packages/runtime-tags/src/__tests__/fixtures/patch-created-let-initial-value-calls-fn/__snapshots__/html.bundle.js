// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a5: "a5 !;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_w = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "a0");
			let y = f(x);
			_html(`<p>${_text_mark($scope1_id, "a", y + input.w)}</p>`);
			_patch_write($scope1_id, "wc", f, 1);
			$cg__input_v && _patch_render($scope1_id, "a1");
			$cg__input_v && _patch_render($scope1_id, "a2");
			_patch_render($scope1_id, "a3", _filled_guard($scope0_reason, 2) && ">f");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va4", y, 1);
			_scope($scope1_id, {
				c: f,
				e: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "a1", "e");
	$fg__input_w && $cg__input_show && _patch_render($scope0_id, "a6", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		f: input.w
	}) || ($fg__input_v && $cg__input_show && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)), $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 2)));
}, 1);
