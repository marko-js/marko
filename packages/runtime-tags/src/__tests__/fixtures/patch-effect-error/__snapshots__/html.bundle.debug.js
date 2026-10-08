// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_input_label#5;D l D ;<p> </p><button> </button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p><button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_label#5");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_label#5", "input_label");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_label", input.label);
}, 1);
