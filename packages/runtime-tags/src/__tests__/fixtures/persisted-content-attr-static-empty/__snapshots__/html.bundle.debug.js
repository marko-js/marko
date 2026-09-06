// template.marko
const $template = "<div></div><section></section><span></span>";
const $walks = " b b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko; b b ;<div></div><section></section><span></span>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_patch_dynamic_tag($scope0_id, "#div/0", undefined, 0, 0, 0);
	_attr_content("#div/0", $scope0_id, undefined, 0);
	_html("</div><section>");
	const $content = null;
	_patch_dynamic_tag($scope0_id, "#section/1", $content, 0, 0, 0);
	_attr_content("#section/1", $scope0_id, $content, 0);
	_html("</section><span>");
	const $content2 = false;
	_patch_dynamic_tag($scope0_id, "#span/2", $content2, 0, 0, 0);
	_attr_content("#span/2", $scope0_id, $content2, 0);
	_html("</span>");
}, 1, 0);
