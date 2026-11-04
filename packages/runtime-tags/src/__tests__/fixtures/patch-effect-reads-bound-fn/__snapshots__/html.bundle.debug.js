// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<output></output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_getTitle#4", 1, $fg__input_title);
	_scope($scope0_id, {
		input_title: input.title,
		getTitle
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		getTitle: "1:8"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:getTitle", getTitle, !$sg__input_title);
}, 1);
