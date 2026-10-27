// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { t: input.title };
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_item#4");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/template.marko_0_item#4" : "PatchEffect:__tests__/template.marko_0_item#4", "input_title");
	$scope0_page ? _scope($scope0_id, { item }, "__tests__/template.marko", 0, { item: "1:8" }) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:item", item, !$sg__input_title));
}, 1);
