// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_flag = _server_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const item = input.flag ? { t: input.title } : undefined;
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_item#6");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/template.marko_0_item#6" : "PatchEffect:__tests__/template.marko_0_item#6", _filled_guard($scope0_reason, 1) && "input_flag", _filled_guard($scope0_reason, 2) && "input_title");
	_scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.title,
		item
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"],
		item: "1:8"
	}) || (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.flag, !$sg__input_flag) : _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !$sg__input_flag)), _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.title, !$sg__input_title) : _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:item", item, !_server_guard($scope0_reason, 0)));
}, 1);
