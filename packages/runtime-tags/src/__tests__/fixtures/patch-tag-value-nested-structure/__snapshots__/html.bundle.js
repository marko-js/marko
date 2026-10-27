// tags/panel.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%bD ;<!><!><output> </output>",
	b3: "b3;b%;<!><!><!>",
	b2: "b2 !b0; D ;<button class=read> </button>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $cg__input_y = _client_guard($scope0_reason, 2), $sg__input_a = _server_guard($scope0_reason, 1), $cg__input_x = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let out = "";
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			const v = input.a;
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xb", v, !$sg__input_a);
			_if(() => {
				if (input.y) {
					const $scope2_id = _scope_id();
					_html(`<button class=read>${_patch_text($scope2_id, "b", v, void 0, $scope0_reason, 1)}</button>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "b0");
					$cg__input_a && _patch_init($scope2_id, "b1");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_y, void 0, void 0, void 0, ["b2"], $scope0_reason, 2);
			_filled_guard($scope0_reason, 1) && ($cg__input_x || $cg__input_y) && _patch_effect($scope1_id, "ib1", "b");
			$cg__input_a && _patch_init($scope1_id, "b4");
			$cg__input_y && _patch_init($scope1_id, "b5");
			_scope($scope1_id, {
				b: v,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
	_html(`<output>${_patch_text($scope0_id, "b", out, void 0, 0, 0, 1)}</output>`);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.y
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_x && _patch_fill($scope0_id, "vb6", input.a, !$sg__input_a), _filled_guard($scope0_reason, 2) && $cg__input_x && _patch_fill($scope0_id, "vb7", input.y, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(32 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3));
	const $childScope = _patch_child($scope0_id, "b", 0);
	panel_default({
		a: input.a,
		x: input.x,
		y
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: y,
		b: _existing_scope($childScope)
	});
}, 1);
