// template.marko
const $template = "<select><option> </option><option value=b>b</option><option>c</option></select><span> </span><button>t</button>";
const $walks = " D D lb lD l b";
const $setup = [[], [
	"__tests__/template.marko_0_input_c#10",
	"__tests__/template.marko_0_input_a#8",
	"__tests__/template.marko_0"
]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_c#10 __tests__/template.marko_0_input_a#8 __tests__/template.marko_0; D D lb lD l ;<select><option> </option><option value=b>b</option><option>c</option></select><span> </span><button>t</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "b";
	_attr_select_value($scope0_id, "#select/0", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html(`<select><option${_attrs(input.a, "#option/1", $scope0_id, "option", 0, $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/2", input.label, 1, $scope0_reason, 1)}</option>${_el_resume($scope0_id, "#option/1")}<option${_attr_option_value("b")}>b</option><option${_attrs({
			value: "c",
			...input.c
		}, "#option/3", $scope0_id, "option", 0, $scope0_reason, 2)}>c</option>${_el_resume($scope0_id, "#option/3")}</select>`);
	}, 0, 0, 0, "PatchWrite:ControlledHandler:#select/0");
	_html(`${_el_resume($scope0_id, "#select/0")}<span>${_text_resume($scope0_id, "#text/4", v)}</span><button>t</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_c#10");
	_script($scope0_id, "__tests__/template.marko_0_input_a#8");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { v }, "__tests__/template.marko", 0, {
		v: "1:6",
		"ControlledHandler:#select/0": ["valueChange"],
		"EventAttributes:#option/1": ["...input.a", "3:14"],
		"EventAttributes:#option/3": ["...input.c", "5:24"]
	});
}, 1);
