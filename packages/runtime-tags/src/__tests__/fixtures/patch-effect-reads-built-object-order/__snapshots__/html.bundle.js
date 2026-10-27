// template.marko
_shells({ a: "a !;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_y = _server_guard($scope0_reason, 2), $sg__input_x = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_patch_text($scope0_id, "a", input.x, void 0, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "a0", 1, _filled_guard($scope0_reason, 0), _filled_guard($scope0_reason, 2) && "e", _filled_guard($scope0_reason, 1) && "d");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && a,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && b,
		i: c
	}) || (_filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "va1", a, !$sg__input_y) : _patch_write($scope0_id, "xf", a, !$sg__input_y)), _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va2", b, !$sg__input_x) : _patch_write($scope0_id, "xg", b, !$sg__input_x)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.x, !$sg__input_x), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.y, !$sg__input_y), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wi", c, !_server_guard($scope0_reason, 0)));
}, 1);
