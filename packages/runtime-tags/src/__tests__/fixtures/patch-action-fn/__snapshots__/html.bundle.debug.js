// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !; D ;<button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
	const act = _action($scope0_id, "__tests__/template.marko_0_act#5/action");
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.x, void 0, $scope0_reason, 0)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_act#5");
	$scope0_page && _scope($scope0_id, {
		input_x: input.x,
		act,
		"TagVariableChange:act": _bind_resume(() => {
			document.title = String(input.x);
		}, "__tests__/template.marko_0/act", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		act: "1:9",
		"TagVariableChange:act": ["actFn", "1:9"]
	});
}, 1);
