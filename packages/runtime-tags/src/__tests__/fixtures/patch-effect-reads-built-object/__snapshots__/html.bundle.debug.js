// template.marko
const $template = "";
const $walks = "";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko," });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = { label: input.title };
	_script($scope0_id, "__tests__/template.marko_0_item#3", 0, $fg__input_title, "input_title");
	_scope($scope0_id, { item }, "__tests__/template.marko", 0, { item: "1:8" }) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:item", item, !$sg__input_title));
}, 1);
