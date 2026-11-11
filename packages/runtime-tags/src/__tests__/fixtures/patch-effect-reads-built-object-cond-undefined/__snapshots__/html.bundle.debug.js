// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_flag__OR__input_title = _unfilled_if($scope0_reason, 0), $fg__input_flag__OR__input_title = _filled_guard($scope0_reason, 0), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const item = input.flag ? { t: input.title } : undefined;
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_item#6", 1, $fg__input_flag__OR__input_title);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_flag#3_input_title#4/setup", (($fg__input_flag ? " input_flag" : "") + ($fg__input_title ? " input_title" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_flag: $ui__input_flag__OR__input_title && input.flag,
		input_title: $ui__input_flag__OR__input_title && input.title,
		item
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"],
		item: "1:8"
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_title && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)), $fg__input_flag__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 0)));
}, 1);
