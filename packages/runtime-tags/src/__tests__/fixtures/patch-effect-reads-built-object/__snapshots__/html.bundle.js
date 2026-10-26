// template.marko
_shells({ a: "a," });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { label: input.title };
	_script($scope0_id, "a0", 0);
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha0" : "ea0", "c");
	$scope0_page ? _scope($scope0_id, { d: item }) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.title, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wd", item, !$sg__input_title));
}, 1);
