// template.marko
const $template = "<button> </button><p></p>";
const $walks = " D l b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_label#5 __tests__/template.marko_0; D l ;<button> </button><p></p>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", clicks)}</button>${_el_resume($scope0_id, "#button/0")}<p></p>${_el_resume($scope0_id, "#p/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_label#5");
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_label#5", "input_label!0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		clicks
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		clicks: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_label", input.label);
}, 1, 0);
