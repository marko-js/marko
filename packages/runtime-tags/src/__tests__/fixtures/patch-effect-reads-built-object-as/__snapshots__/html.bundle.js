// template.marko
_shells({ a: "a; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { t: input.title };
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha0" : "ea0", "d");
	$scope0_page ? _scope($scope0_id, { e: item }) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", item, !$sg__input_title));
}, 1);
