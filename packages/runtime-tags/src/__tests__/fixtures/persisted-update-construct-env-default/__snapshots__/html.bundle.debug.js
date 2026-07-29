// template.marko
const selected = typeof window === "undefined" ? "pro" : "basic";
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>clicked <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/2", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html(`<input${_attr_input_checkedValue($scope1_id, "#input/0", _hole_value($scope1_id, "PatchAttr:checkedValue:#input/0", selected, _persisted_reason()), void 0, "pro")} type=radio name=plan class=pro>${_el_resume($scope1_id, "#input/0")}<input${_attr_input_checkedValue($scope1_id, "#input/1", _hole_value($scope1_id, "PatchAttr:checkedValue:#input/1", selected, _persisted_reason()), void 0, "basic")} type=radio name=plan class=basic>${_el_resume($scope1_id, "#input/1")}`);
		$sg__input_show && writeScope($scope1_id, {}, "__tests__/template.marko", "5:2");
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/template.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>", " b b"],
	"__tests__/template.marko_1_content": ["<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>", " b b"],
	"__tests__/template.marko_0_update": ["<button class=n>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=n>clicked <!></button><!><!>", " Db%l%c"]
});
