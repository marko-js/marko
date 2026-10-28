// template.marko
const $template = "<textarea></textarea>";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<textarea></textarea>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_attr_textarea_value($scope0_id, "#textarea/0", `[AB]${input.name}[!]`, 0, "PatchControl:2#textarea/0", $scope0_reason, 0)}</textarea>${_el_resume($scope0_id, "#textarea/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
