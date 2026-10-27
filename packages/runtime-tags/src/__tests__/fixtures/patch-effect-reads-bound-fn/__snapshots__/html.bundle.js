// template.marko
_shells({ a: "a; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "a0", $scope0_id);
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha1" : "ea1", "e");
	_scope($scope0_id, {
		d: input.title,
		e: getTitle
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", getTitle, !$sg__input_title);
}, 1);
