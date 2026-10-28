// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $setup = [[], [
	"__tests__/template.marko_0_$global_o#6_$global_o_x#7",
	"__tests__/template.marko_0_$global_o#6",
	"__tests__/template.marko_0_$global_o_x#7"
]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_o#6_$global_o_x#7 __tests__/template.marko_0_$global_o#6 __tests__/template.marko_0_$global_o_x#7; b b ;<div></div><div></div><div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}<div></div>${_el_resume($scope0_id, "#div/1")}<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_$global_o#6_$global_o_x#7");
	_script($scope0_id, "__tests__/template.marko_0_$global_o#6");
	_script($scope0_id, "__tests__/template.marko_0_$global_o_x#7");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
