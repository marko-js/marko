// template.marko
_shells({ a: "a; b b ;<div></div><section></section><span></span>" });
var template_default = _template_persisted("a", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_patch_dynamic_tag($scope0_id, "a", void 0, 0, 0, 0, 0);
	_attr_content("a", $scope0_id, void 0, 0, 1);
	_html("</div><section>");
	const $content = null;
	_patch_dynamic_tag($scope0_id, "b", $content, 0, 0, 0, 0);
	_attr_content("b", $scope0_id, $content, 0, 1);
	_html("</section><span>");
	const $content2 = false;
	_patch_dynamic_tag($scope0_id, "c", $content2, 0, 0, 0, 0);
	_attr_content("c", $scope0_id, $content2, 0, 1);
	_html("</span>");
}, 1, 0);
