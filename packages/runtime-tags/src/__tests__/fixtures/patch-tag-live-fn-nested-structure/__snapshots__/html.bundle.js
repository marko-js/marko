// tags/panel.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><output> </output>",
	b4: "b4;b%;<!><!><!>",
	b3: "b3 !b1; D ;<button class=read> </button>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $cg__input_y = _client_guard($scope0_reason, 2), $sg__input_a = _server_guard($scope0_reason, 1), $cg__input_x = _client_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_y = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_a && _patch_write($scope0_id, "xf", input.a, !$sg__input_a);
	let out = "";
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			const f = _bind_resume(function() {
				return input.a;
			}, "b0", $scope1_id);
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xb", f, !$sg__input_a);
			_if(() => {
				if (input.y) {
					const $scope2_id = _scope_id();
					_html(`<button class=read>${_text_mark($scope2_id, "b", f(), 1, $scope0_reason, 1)}</button>${_el_mark($scope2_id, "a")}`);
					_script($scope2_id, "b1");
					$cg__input_a && _patch_render($scope2_id, "b2");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_y, 1, 0, 0, ["b3"], $scope0_reason, 2);
			_filled_guard($scope0_reason, 1) && ($cg__input_x || $cg__input_y) && _patch_render($scope1_id, "b2", ["b", ">f"]);
			$cg__input_a && _patch_render($scope1_id, "b5");
			$cg__input_y && _patch_render($scope1_id, "b6");
			_scope($scope1_id, {
				b: f,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b4"], $scope0_reason, 0);
	_html(`<output>${_text_mark($scope0_id, "b", out, 1, 0, 0, 1)}</output>`);
	$fg__input_a && $cg__input_x && _patch_render($scope0_id, "b5", "f");
	$fg__input_y && $cg__input_x && _patch_render($scope0_id, "b6", "g");
	_scope($scope0_id, {
		f: input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.y
	}) || $fg__input_y && $cg__input_x && _patch_write($scope0_id, "xg", input.y, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(32 | (_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 0) << 3));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
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
