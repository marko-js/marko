// template.marko
_shells({ a: "a !a0;b%b ;<!><!><button>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 2), $fg__input_color = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let s = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`${_style_html(`--M_a0:${_escape_style_value(input.color)};`)}${_el_mark($scope1_id, "a", $wg__input_color)}<b class=x>${_text_mark($scope1_id, "b", input.x, $wg__input_x)}</b>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$fg__input_color && _patch_render($scope0_id, "a1", "e");
	$fg__input_x && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		e: input.color,
		f: input.x,
		g: s
	}) || ($fg__input_color && _patch_write($scope0_id, "xe", input.color, !_server_guard($scope0_reason, 1)), $fg__input_x && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 2)));
}, 1);
