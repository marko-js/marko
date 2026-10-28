// template.marko
_shells({ a: "a; b b ;<div></div><section></section><span></span>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_attr_content("a", $scope0_id, void 0, 0, 0, 0, 0);
	_html("</div><section>");
	_attr_content("b", $scope0_id, null, 1, 0, 0, 0);
	_html("</section><span>");
	_attr_content("c", $scope0_id, false, 2, 0, 0, 0);
	_html("</span>");
}, 1);
