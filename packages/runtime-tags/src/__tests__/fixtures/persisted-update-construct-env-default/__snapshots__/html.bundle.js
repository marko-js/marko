// template.marko
const selected = typeof window === "undefined" ? "pro" : "basic";
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>clicked <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.show ? 0 : void 0, $scope0_id, "c", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "a0", [() => {
		const $scope1_id = _scope_id();
		_html(`<input${_attr_input_checkedValue($scope1_id, "a", _hole_value($scope1_id, "NcheckedValue:a", selected, _persisted_reason()), void 0, "pro")} type=radio name=plan class=pro>${_el_resume($scope1_id, "a")}<input${_attr_input_checkedValue($scope1_id, "b", _hole_value($scope1_id, "NcheckedValue:b", selected, _persisted_reason()), void 0, "basic")} type=radio name=plan class=basic>${_el_resume($scope1_id, "b")}`);
		$sg__input_show && writeScope($scope1_id, {});
	}], ["a2"]);
	_script($scope0_id, "a3");
	writeScope($scope0_id, { g: _state_reason() && n });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>", " b b"],
	"a4": ["<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>", " b b"],
	"a1": ["<button class=n>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=n>clicked <!></button><!><!>", " Db%l%c"]
});
