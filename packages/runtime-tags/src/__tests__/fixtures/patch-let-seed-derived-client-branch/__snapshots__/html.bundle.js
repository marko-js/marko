// template.marko
_shells({ a: "a !a2; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_v = _server_guard($scope0_reason, 1), $fg__input_w = _filled_guard($scope0_reason, 2), $fg__input_v = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const d = input.v + "!";
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", d)} ${_text_mark($scope1_id, "b", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a2");
	$fg__input_w && _patch_render($scope0_id, "a0", "f");
	$fg__input_v && _patch_render($scope0_id, "a1", "g");
	_scope($scope0_id, {
		f: input.w,
		g: d,
		h: on
	}) || ($fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 2)), $fg__input_v && _patch_write($scope0_id, "xg", d, !$sg__input_v));
}, 1);
