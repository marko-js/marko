// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 1), $fg__input_y = _filled_guard($scope0_reason, 2), $sg__input_y = _server_guard($scope0_reason, 2), $sg__input_x = _server_guard($scope0_reason, 1), $fg__input_x__OR__input_y = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_mark($scope0_id, "a", input.x, 1, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "a0", 1, $fg__input_x__OR__input_y, [$fg__input_y && "e", $fg__input_x && "d"]);
	_patch_render($scope0_id, "a1", [$fg__input_y && "e", $fg__input_x && "d"], $scope0_reason, 0);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && a,
		g: _write_if($scope0_reason, 2) && b,
		i: c
	}) || ($fg__input_x && _patch_write($scope0_id, "xd", input.x, !$sg__input_x), $fg__input_y && _patch_write($scope0_id, "xe", input.y, !$sg__input_y), $fg__input_y && _patch_write($scope0_id, "xf", a, !$sg__input_y), $fg__input_x && _patch_write($scope0_id, "xg", b, !$sg__input_x), $fg__input_x__OR__input_y && _patch_write($scope0_id, "xi", c, !_server_guard($scope0_reason, 0)));
}, 1);
