// template.marko
_shells({ a: "a !a3;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $ui__input_title__OR__input_upper = _unfilled_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 1), $ui__input_upper = _unfilled_if($scope0_reason, 2), $fg__input_title__OR__input_upper = _filled_guard($scope0_reason, 0), $fg__input_upper = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = input.upper ? up : low;
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$fg__input_title__OR__input_upper && _patch_render($scope0_id, "a2", "j" + ($fg__input_title ? " e" : ""));
	_patch_render($scope0_id, "a4", (($fg__input_upper ? " f" : "") + ($fg__input_title ? " g" : "") + ($fg__input_title ? " e" : "") + ($fg__input_title ? " h" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.title,
		f: $ui__input_title__OR__input_upper && input.upper,
		g: $ui__input_title__OR__input_upper && up,
		h: $ui__input_title__OR__input_upper && low,
		j: pick,
		k: open
	}) || ($fg__input_upper && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.upper, !_server_guard($scope0_reason, 2)), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "xg", up, !$sg__input_title), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "xh", low, !$sg__input_title), $fg__input_title__OR__input_upper && _patch_write($scope0_id, "xj", pick, !_server_guard($scope0_reason, 0)));
}, 1);
