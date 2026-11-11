// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_x__OR__input_y = _unfilled_if($scope0_reason, 0), $fg__input_x__OR__input_y = _filled_guard($scope0_reason, 0), $fg__input_y = _filled_guard($scope0_reason, 2), $fg__input_x = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_mark($scope0_id, "a", input.x, 1, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "a0", 1, $fg__input_x__OR__input_y);
	_patch_render($scope0_id, "a1", (($fg__input_y ? " f" : "") + ($fg__input_x ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: $ui__input_x__OR__input_y && a,
		g: $ui__input_x__OR__input_y && b,
		i: c
	}) || ($fg__input_y && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", a, !_server_guard($scope0_reason, 2)), $fg__input_x && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xg", b, !_server_guard($scope0_reason, 1)), $fg__input_x__OR__input_y && _patch_write($scope0_id, "xi", c, !_server_guard($scope0_reason, 0)));
}, 1);
