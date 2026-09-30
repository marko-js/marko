// template.marko
const $template = "<main><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><h1> </h1></main>";
const $walks = "E lD lD lD lD lD lD lD lD lD lD lD lD lD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_label#28 __tests__/template.marko_0_$global_brand#29;E lD lD lD lD lD lD lD lD lD lD lD lD lD ;<main><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><h1> </h1></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", input.v1, void 0, $scope0_reason, 0)}</p><p>${_patch_text($scope0_id, "#text/1", input.v2, void 0, $scope0_reason, 1)}</p><p>${_patch_text($scope0_id, "#text/2", input.v3, void 0, $scope0_reason, 2)}</p><p>${_patch_text($scope0_id, "#text/3", input.v4, void 0, $scope0_reason, 3)}</p><p>${_patch_text($scope0_id, "#text/4", input.v5, void 0, $scope0_reason, 4)}</p><p>${_patch_text($scope0_id, "#text/5", input.v6, void 0, $scope0_reason, 5)}</p><p>${_patch_text($scope0_id, "#text/6", input.v7, void 0, $scope0_reason, 6)}</p><p>${_patch_text($scope0_id, "#text/7", input.v8, void 0, $scope0_reason, 7)}</p><p>${_patch_text($scope0_id, "#text/8", input.v9, void 0, $scope0_reason, 8)}</p><p>${_patch_text($scope0_id, "#text/9", input.v10, void 0, $scope0_reason, 9)}</p><p>${_patch_text($scope0_id, "#text/10", input.v11, void 0, $scope0_reason, 10)}</p><p>${_patch_text($scope0_id, "#text/11", input.v12, void 0, $scope0_reason, 11)}</p><p>${_patch_text($scope0_id, "#text/12", input.v1, void 0, $scope0_reason, 0)}</p><h1>${_patch_text($scope0_id, "#text/13", $global$1.brand)}</h1></main>`);
	_global_subscribe("__tests__/template.marko_0_$global_brand#29/global", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0_input_label#28");
	_script($scope0_id, "__tests__/template.marko_0_$global_brand#29");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_label#28", "input_label");
	$scope0_page ? _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 12) && _patch_write($scope0_id, "input_label", input.label);
}, 1, 1);
