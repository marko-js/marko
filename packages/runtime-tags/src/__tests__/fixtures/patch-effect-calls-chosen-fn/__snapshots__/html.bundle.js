// template.marko
_shells({ a: "a; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_upper = _write_if($scope0_reason, 2), $fg__input_title = _filled_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 1), $cg__input_upper = _client_guard($scope0_reason, 2), $fg__input_title__OR__input_upper = _filled_guard($scope0_reason, 0), $fg__input_upper = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = input.upper ? up : low;
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a2", 1, $fg__input_title__OR__input_upper, ["i", $fg__input_title && "d"]);
	_patch_render($scope0_id, "a3", [
		$fg__input_upper && "e",
		$fg__input_title && "f",
		$fg__input_title && "d",
		$fg__input_title && "g"
	], $scope0_reason, 0);
	_scope($scope0_id, {
		d: input.title,
		e: _write_if($scope0_reason, 1) && input.upper,
		f: $wi__input_upper && up,
		g: $wi__input_upper && low,
		i: pick
	}) || ($fg__input_upper && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.upper, !_server_guard($scope0_reason, 2)), $fg__input_title && $cg__input_upper && _patch_write($scope0_id, "xf", up, !$sg__input_title), $fg__input_title && $cg__input_upper && _patch_write($scope0_id, "xg", low, !$sg__input_title), $fg__input_title__OR__input_upper && _patch_write($scope0_id, "xi", pick, !_server_guard($scope0_reason, 0)));
}, 1);
