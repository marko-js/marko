// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a5: "a5 !;b%;<!><!><!>",
	a4: "a4 a3 a13 a14;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 3), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_inner = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
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
					_html(`<p>${_text_resume($scope2_id, "a", y + input.w)}</p>`);
					$cg__input_v && _patch_init($scope2_id, "a1");
					!$cg__input_v && _patch_fill($scope2_id, "va2", y, 1);
					_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, {
						c: $wi__input_w && y,
						_: _scope_with_id($scope1_id)
					}), _client_guard($scope0_reason, 3) && "a3");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a4"], $scope0_reason, 2);
			_patch_write($scope1_id, "wc", f, 1);
			$cg__input_v && _patch_init($scope1_id, "a6");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a7");
			!$cg__input_v && _patch_fill($scope1_id, "va8", x, 1);
			_scope($scope1_id, {
				b: _write_if($scope0_reason, 2) && x,
				c: f,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.inner,
		g: input.w,
		j: $wi__input_w && $input_w__closures
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va9", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va10", input.inner, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va11", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
