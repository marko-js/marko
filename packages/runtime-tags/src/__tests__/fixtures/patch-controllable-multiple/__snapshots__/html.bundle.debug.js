// template.marko
const $template = "<main><h1> </h1><select><option value=a>A</option><option value=b>B</option></select></main>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><select><option value=a>A</option><option value=b>B</option></select></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_patch_select_value($scope0_id, "#select/1", input.choice, _resume(function(next) {
		document.querySelector("main").dataset.choice = String(next);
	}, "__tests__/template.marko_0/valueChange"), () => {
		_html(`<select${_patch_attr($scope0_id, "PatchAttr:#select/1 multiple", "multiple", input.many, $scope0_reason, 1)}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	}, "PatchControl:3#select/1", $scope0_reason, 2, "PatchBind:ControlledHandler:#select/1", $scope0_reason, 2);
	_html(`${_el_resume($scope0_id, "#select/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#select/1": ["valueChange", "3:50"] });
}, 1);
