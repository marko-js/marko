// template.marko
const $template = "<div><!> <!> <!></div>";
const $walks = " D%c%c%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; D%c%c%;<div><!> <!> <!></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const x = _id("x");
	const z = input.z || _id("z");
	const y = _id("y");
	_html(`<div${_attr("id", z, $scope0_id, "PatchAttr:#div/0 id", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", x, 1, 0, 0)} ${_text_resume($scope0_id, "#text/2", y, 2, 0, 0)} ${_text_resume($scope0_id, "#text/3", z, 2, $scope0_reason, 0)}</div>${_el_resume($scope0_id, "#div/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
