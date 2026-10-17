// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; b ;<input><input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.text;
			let b = a;
			_html(`<input${_patch_input_value($scope1_id, "#input/0", a, _resume((_new_a) => {
				a = _new_a;
			}, "__tests__/template.marko_1/valueChange", $scope1_id), void 0, void 0, void 0, "PatchBind:ControlledHandler:#input/0")}>${_el_resume($scope1_id, "#input/0")}<input${_patch_input_value($scope1_id, "#input/1", b, _resume((_new_b) => {
				b = _new_b;
			}, "__tests__/template.marko_1/valueChange2", $scope1_id), void 0, void 0, void 0, "PatchBind:ControlledHandler:#input/1")}>${_el_resume($scope1_id, "#input/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", a, 1);
			_patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill2", b, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2", {
				"ControlledHandler:#input/0": ["valueChange"],
				"ControlledHandler:#input/1": ["valueChange"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_text: _write_if($scope0_reason, 0) && input.text }, "__tests__/template.marko", 0, { input_text: ["input.text"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.text, !_server_guard($scope0_reason, 1));
}, 1);
