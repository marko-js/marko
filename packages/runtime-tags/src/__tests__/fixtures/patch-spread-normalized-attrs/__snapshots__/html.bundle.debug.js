// template.marko
const $template = "<button class=inc> </button><div>x</div><!><input>";
const $walks = " D l b%b b";
const $setup = [[], [
	"__tests__/template.marko_0_input_field#10",
	"__tests__/template.marko_0_input_attrs#7",
	"__tests__/template.marko_0"
]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_field#10 __tests__/template.marko_0_input_attrs#7 __tests__/template.marko_0; D l b%b ;<button class=inc> </button><div>x</div><!><input>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_input_link#0:9; ;<a>z</a>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<div${_attrs(input.attrs, "#div/2", $scope0_id, "div", void 0, $scope0_reason, 0)}>x</div>${_el_resume($scope0_id, "#div/2")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs(input.link, "#a/0", $scope1_id, "a", void 0, $scope0_reason, 2)}>z</a>${_el_resume($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_link#0:9");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_link#0:9/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2", { "EventAttributes:#a/0": ["...input.link", "4:22"] });
			return 0;
		}
	}, $scope0_id, "#text/3", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<input${_attrs(input.field, "#input/4", $scope0_id, "input", 1, $scope0_reason, 3)}>${_el_resume($scope0_id, "#input/4")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_field#10");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#7");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_link: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.link,
		n
	}, "__tests__/template.marko", 0, {
		input_link: ["input.link"],
		n: "1:6",
		"EventAttributes:#div/2": ["...input.attrs", "3:9"],
		"ControlledHandler:#input/4": ["...input.field", "5:11"],
		"EventAttributes:#input/4": ["...input.field", "5:11"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.link, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.link));
}, 1);
