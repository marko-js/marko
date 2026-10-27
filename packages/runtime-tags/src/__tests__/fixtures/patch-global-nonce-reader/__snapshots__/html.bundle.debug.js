// template.marko
const $template = "<p> </p><div></div>";
const $walks = "D l b";
const $setup = [[], ["__tests__/template.marko_0_$global_cspNonce#6"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_cspNonce#6;D l ;<p> </p><div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_patch_text($scope0_id, "#text/0", $global$1.x)}</p><div></div>${_el_resume($scope0_id, "#div/1")}`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_x#4", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0_$global_cspNonce#6");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
