// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, void 0, "PatchControl:2#input/1", $scope0_reason, 1)}>${_el_resume($scope0_id, "#input/1", _mask_group($scope0_reason, 1))}</main>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
