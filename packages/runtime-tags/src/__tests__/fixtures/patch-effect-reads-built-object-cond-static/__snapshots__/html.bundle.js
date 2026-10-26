// template.marko
const NONE = { t: "none" };
_shells({ a: "a !; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_flag = _server_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = input.flag ? { t: input.title } : NONE;
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha0" : "ea0", _filled_guard($scope0_reason, 1) && "d", _filled_guard($scope0_reason, 2) && "e");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.title,
		g: item
	}) : (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va1", input.flag, !$sg__input_flag) : _patch_write($scope0_id, "xd", input.flag, !$sg__input_flag)), _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "va2", input.title, !$sg__input_title) : _patch_write($scope0_id, "xe", input.title, !$sg__input_title)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wg", item, !_server_guard($scope0_reason, 0)));
}, 1);
