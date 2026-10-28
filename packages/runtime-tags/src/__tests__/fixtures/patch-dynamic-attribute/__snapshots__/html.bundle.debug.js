// template.marko
const $template = "<a> </a>";
const $walks = " D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; D ;<a> </a>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href, $scope0_id, "PatchAttr:#a/0 href", $scope0_reason, 0)}${_attr("title", input.title, $scope0_id, "PatchAttr:#a/0 title", $scope0_reason, 1)}${_attr("hidden", input.hidden, $scope0_id, "PatchAttr:#a/0 hidden", $scope0_reason, 2)}>${_text_resume($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 3)}</a>${_el_resume($scope0_id, "#a/0", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 1) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
