// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b1: "b1;D ;<span> </span>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 4), $cg__input_v = _client_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $sg__input_v = _server_guard($scope0_reason, 3), $fg__input_v2 = _filled_guard($scope0_reason, 3), $fg__input_on = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 4), $fg__input_v = _filled_guard($scope0_reason, 3);
			const v = `${input.v}!`;
			$fg__input_v && $ui__input_on && _patch_write($scope1_id, "xb", v, !$sg__input_v);
			_if(() => {
				if (input.on) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_mark($scope2_id, "a", v, 1, $scope0_reason, 3)}</span>`);
					$cg__input_v && _patch_render($scope2_id, "b0");
					_scope($scope2_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_on, 1, 0, 0, ["b1"], $scope0_reason, 4);
			$fg__input_v && $cg__input_on && _patch_render($scope1_id, "b0", "b");
			$cg__input_v && _patch_render($scope1_id, "b3");
			$cg__input_on && _patch_render($scope1_id, "b4");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				b: ($ui__input_on || _unfilled_if($scope0_reason, 3)) && v,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 2);
	$fg__input_v2 && $cg__input_show && _patch_render($scope0_id, "b3", "e");
	$fg__input_on && $cg__input_show && _patch_render($scope0_id, "b4", "f");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.v,
		f: ($ui__input_show || _unfilled_if($scope0_reason, 4)) && input.on
	}) || ($fg__input_v2 && $ui__input_show && _patch_write($scope0_id, "xe", input.v, !$sg__input_v), $fg__input_on && $ui__input_show && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(542 | (_updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 1) << 7));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	child_default({
		show: input.show,
		v: input.v,
		on
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: on,
		b: _existing_scope($childScope)
	});
}, 1);
