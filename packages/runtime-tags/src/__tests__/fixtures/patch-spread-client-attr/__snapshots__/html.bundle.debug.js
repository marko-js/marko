// template.marko
const $template = "<main><div>x</div></main>";
const $walks = "D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_input_attrs#3;D ;<main><div>x</div></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><div${_patch_attrs_partial(input.attrs, { "data-mounted": 1 }, "#div/0", $scope0_id, "div", void 0, $scope0_reason, 0)}>x</div>${_el_resume($scope0_id, "#div/0")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#3");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#div/0": ["...input.attrs", "2:14"] });
}, 1);
