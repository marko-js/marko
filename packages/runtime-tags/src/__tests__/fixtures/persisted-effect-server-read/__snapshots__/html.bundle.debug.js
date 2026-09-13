// template.marko
const $template = "<div></div><button>+</button>";
const $walks = " b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<div></div><button>+</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_label#4_count#5");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_label#4_count#5", "input_label");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_label", input.label);
}, 1, 0);
