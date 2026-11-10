// template.marko
_shells({ a: "a; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "a0", $scope0_id);
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a1", 1, $fg__input_title);
	_scope($scope0_id, {
		d: input.title,
		e: getTitle
	}) || $fg__input_title && _patch_write($scope0_id, "xe", getTitle, !$sg__input_title);
}, 1);
