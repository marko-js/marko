// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; ;<input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_patch_input_value($scope1_id, "#input/0", input.value, _resume(function(next) {
				document.querySelector("main").dataset.got = next;
			}, "__tests__/template.marko_1/valueChange"), "PatchControl:2#input/0", $scope0_reason, 2, "PatchWrite:ControlledHandler:#input/0", $scope0_reason, 2)}>${_el_resume($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_value#0:6/init");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4", { "ControlledHandler:#input/0": ["valueChange", "4:30"] });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { input_value: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.value, !_server_guard($scope0_reason, 2));
}, 1);
