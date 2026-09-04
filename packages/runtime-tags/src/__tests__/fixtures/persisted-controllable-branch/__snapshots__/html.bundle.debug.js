// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; ;<input>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "#input/0", input.value, _resume(function(next) {
				document.querySelector("main").dataset.got = next;
			}, "__tests__/template.marko_1/valueChange"))}${_patch_bind($scope1_id, "ControlledHandler:#input/0", _resume(function(next) {
				document.querySelector("main").dataset.got = next;
			}, "__tests__/template.marko_1/valueChange"), 0, 0)}${_patch_control($scope1_id, "#input/0", 2, input.value, $scope0_owned, 3)}>${_el_resume($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4", { "ControlledHandler:#input/0": ["valueChange", "4:30"] });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 2);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { input_value: input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, 0);
