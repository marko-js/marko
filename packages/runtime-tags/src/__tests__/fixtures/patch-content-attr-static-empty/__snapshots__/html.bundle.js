// template.marko
_shells({ a: "a; b b ;<div></div><section></section><span></span>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_patch_attr_content("a", $scope0_id, void 0, 0, 0, 0);
	_html("</div><section>");
	_patch_attr_content("b", $scope0_id, null, 0, 0, 0);
	_html("</section><span>");
	_patch_attr_content("c", $scope0_id, false, 0, 0, 0);
	_html("</span>");
}, 1);
