// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button class=inc> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; b ;<input class=b><input type=checkbox class=c>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_patch_input_value($scope1_id, "#input/0", input.value, _resume(function(next) {
				console.log(next);
			}, "__tests__/template.marko_1/valueChange"), "PatchControl:2#input/0", $scope0_reason, 2, "PatchBind:ControlledHandler:#input/0", $scope0_reason, 2)} class=b>${_el_resume($scope1_id, "#input/0")}<input${_patch_input_checked($scope1_id, "#input/1", input.flag, _resume(function(next) {
				console.log(next);
			}, "__tests__/template.marko_1/checkedChange"), "PatchControl:0#input/1", $scope0_reason, 3, "PatchBind:ControlledHandler:#input/1", $scope0_reason, 3)} type=checkbox class=c>${_el_resume($scope1_id, "#input/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2", {
				"ControlledHandler:#input/0": ["valueChange", "4:30"],
				"ControlledHandler:#input/1": ["checkedChange", "5:47"]
			});
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_value: _unfilled_if($scope0_reason, 1) && input.value,
		input_flag: _unfilled_if($scope0_reason, 1) && input.flag,
		n
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_flag: ["input.flag"],
		n: "1:6"
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.value), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.flag));
}, 1);
