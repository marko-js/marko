// template.marko
_shells({ a: "a; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_flag__OR__input_title = _unfilled_if($scope0_reason, 0), $ui__input_title = _unfilled_if($scope0_reason, 2), $ui__input_flag = _unfilled_if($scope0_reason, 1), $fg__input_flag__OR__input_title = _filled_guard($scope0_reason, 0), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const item = input.flag && { t: input.title };
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0", 1, $fg__input_flag__OR__input_title);
	_patch_render($scope0_id, "a1", (($fg__input_flag ? " d" : "") + ($fg__input_title ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_title || $ui__input_flag__OR__input_title) && input.flag,
		e: ($ui__input_flag || $ui__input_flag__OR__input_title) && input.title,
		g: item
	}) || ($fg__input_flag && $ui__input_title && _patch_write($scope0_id, "xd", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_title && $ui__input_flag && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 2)), $fg__input_flag__OR__input_title && _patch_write($scope0_id, "xg", item, !_server_guard($scope0_reason, 0)));
}, 1);
