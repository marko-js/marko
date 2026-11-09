// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a4: "a4 !;b%;<!><!><!>",
	a3: "a3 a10;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1), $fg__input_inner = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_w = _filled_guard($scope0_reason, 3), $cg__input_inner = _client_guard($scope0_reason, 2), $wi__input_w = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "a0");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					let y = f(x);
					_html(`<p>${_text_mark($scope2_id, "a", y + input.w)}</p>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a1");
					_patch_render($scope2_id, "a2", _filled_guard($scope0_reason, 3) && ">>g");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_w__closures, _scope($scope2_id, {
						c: $wi__input_w && y,
						_: _scope_with_id($scope1_id)
					}), _client_guard($scope0_reason, 3) && "a1");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a3"], $scope0_reason, 2);
			_patch_write($scope1_id, "wc", f, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a5");
			$cg__input_inner && _patch_render($scope1_id, "a6");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va7", x, 1);
			_scope($scope1_id, {
				b: _write_if($scope0_reason, 2) && x,
				c: f,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "a5", "e");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "a6", "f");
	$fg__input_w && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "a8", "g");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.v,
		f: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.inner,
		g: input.w,
		j: $wi__input_w && $input_w__closures
	}) || ($fg__input_v && $ui__input_show && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)), $fg__input_inner && $ui__input_show && _patch_write($scope0_id, "xf", input.inner, !_server_guard($scope0_reason, 2)), $fg__input_w && _patch_write($scope0_id, "xg", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
