// template.marko
const $template = "<input><p id=out>-</p><button>interactive</button>";
const $walks = " c b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_input_attrs#4_input_on#5; c ;<input><p id=out>-</p><button>interactive</button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_attrs({
		type: "checkbox",
		...input.attrs,
		checked: input.on
	}, "#input/0", $scope0_id, "input", 1, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}<p id=out>-</p><button>interactive</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#4_input_on#5");
	$scope0_page && _scope($scope0_id, {
		input_attrs: input.attrs,
		input_on: input.on
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		input_on: ["input.on"],
		"ControlledHandler:#input/0": ["...input.attrs", "1:27"],
		"EventAttributes:#input/0": ["...input.attrs", "1:27"]
	});
}, 1, 0);
