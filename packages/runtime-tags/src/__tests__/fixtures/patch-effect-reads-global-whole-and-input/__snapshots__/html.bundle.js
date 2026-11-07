// template.marko
_shells({ a: "a; ;<div></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_page = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_mark($scope0_id, "a")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_patch_render($scope0_id, "a2", [$fg__input_page && "d", "e"], (2 | _updates_from($scope0_reason, 0)) << 1, 0) || _script($scope0_id, "a1", 1, $fg__input_page, "d");
	_scope($scope0_id, { d: input.page }) || $fg__input_page && _patch_write($scope0_id, "xd", input.page, !_server_guard($scope0_reason, 0));
}, 1);
