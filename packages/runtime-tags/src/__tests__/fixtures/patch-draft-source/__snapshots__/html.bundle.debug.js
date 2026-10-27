// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !; D ;<button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let d = input.x;
	const set = _action($scope0_id, "__tests__/template.marko_0_set#7/action");
	_html(`<button>${_text_resume($scope0_id, "#text/1", d)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_set#7");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", d);
	$scope0_page && _scope($scope0_id, {
		d,
		set,
		"TagVariableChange:set": _resume(() => {
			d = 9;
		}, "__tests__/template.marko_0/set", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "1:8",
		set: "2:9",
		"TagVariableChange:set": ["setFn", "2:9"]
	});
}, 1);
