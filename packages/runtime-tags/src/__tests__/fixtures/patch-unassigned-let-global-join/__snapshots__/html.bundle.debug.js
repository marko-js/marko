// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let x = input.a;
	_html(`<p>${_text_resume($scope0_id, "#text/0", x + $global$1.flag)}</p>`);
	_fill_global_subscribe("__tests__/template.marko_0_x#4_$global_flag#6", $scope0_id, 1);
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
