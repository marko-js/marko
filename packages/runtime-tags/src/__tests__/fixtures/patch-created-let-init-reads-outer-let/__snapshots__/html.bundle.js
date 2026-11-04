// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: "a3 !a4; D l%;<button class=x> </button><!><!>",
	a2: "a2 a8!a0; b ;<span></span><button class=y>go</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_outer = _write_guard($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $cg__input_outer = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			let x = 1;
			_html(`<button class=x>${_text_mark($scope1_id, "b", x)}</button>${_el_mark($scope1_id, "a")}`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					let y = x;
					_html(`<span></span>${_el_mark($scope2_id, "a")}<button class=y>go</button>${_el_mark($scope2_id, "b")}`);
					_script($scope2_id, "a0");
					_script($scope2_id, "a1");
					_scope($scope2_id, {
						c: y,
						_: _scope_with_id($scope1_id)
					});
					return 0;
				}
			}, $scope1_id, "c", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
			_script($scope1_id, "a4");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a5");
			_patch_fill($scope1_id, "va6", x, 1);
			_scope($scope1_id, {
				d: x,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_outer, 1, 0, 0, ["a3"], $scope0_reason, 0);
	$fg__input_show && $cg__input_outer && _patch_render($scope0_id, "a5", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.show }) || $fg__input_show && $cg__input_outer && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 1));
}, 1);
