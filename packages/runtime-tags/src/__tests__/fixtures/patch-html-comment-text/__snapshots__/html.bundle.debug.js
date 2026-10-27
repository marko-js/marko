// template.marko
const $template = "<!---->";
const $walks = " b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<!---->" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!--${_patch_text_content($scope0_id, "PatchTextContent:#comment/0", input.title, _escape_comment, $scope0_reason, 0) || " "}-->${_el_resume($scope0_id, "#comment/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
