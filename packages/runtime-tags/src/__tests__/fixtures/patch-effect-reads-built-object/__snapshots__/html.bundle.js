// template.marko
_shells({ a: "a," });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = { label: input.title };
	_script($scope0_id, "a0", 0, $fg__input_title, "c");
	_scope($scope0_id, { d: item }) || ($fg__input_title && _patch_write($scope0_id, "xc", input.title, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xd", item, !$sg__input_title));
}, 1);
