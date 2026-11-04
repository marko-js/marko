// template.marko
const $template = "<div></div><section></section><span></span>";
const $walks = " b b b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; b b ;<div></div><section></section><span></span>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_attr_content("#div/0", $scope0_id, undefined, 0, 0, 0, 0);
	_html("</div><section>");
	_attr_content("#section/1", $scope0_id, null, 1, 0, 0, 0);
	_html("</section><span>");
	_attr_content("#span/2", $scope0_id, false, 2, 0, 0, 0);
	_html("</span>");
}, 1);
