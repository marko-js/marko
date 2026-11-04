// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_obj = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_obj__OR__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = input.obj ?? { t: input.title };
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_item#6", 1, $fg__input_obj__OR__input_title, [$fg__input_obj && "input_obj", $fg__input_title && "input_title"]);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_obj#3_input_title#4/setup", [$fg__input_obj && "input_obj", $fg__input_title && "input_title"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_obj: _write_if($scope0_reason, 2) && input.obj,
		input_title: _write_if($scope0_reason, 1) && input.title,
		item
	}, "__tests__/template.marko", 0, {
		input_obj: ["input.obj"],
		input_title: ["input.title"],
		item: "1:8"
	}) || ($fg__input_obj && _patch_write($scope0_id, "PatchMarkedWrite:input_obj", input.obj, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)), $fg__input_obj__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 0)));
}, 1);
