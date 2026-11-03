// template.marko
_shells({ a: "a !a1 a2 a3; D D lb lD l ;<select><option> </option><option value=b>b</option><option>c</option></select><span> </span><button>t</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "b";
	_attr_select_value($scope0_id, "a", v, _resume((_new_v) => {
		v = _new_v;
	}, "a0", $scope0_id), () => {
		_html(`<select><option${_attrs(input.a, "b", $scope0_id, "option", 0, $scope0_reason, 0)}>${_text_resume($scope0_id, "c", input.label, 1, $scope0_reason, 1)}</option>${_el_resume($scope0_id, "b")}<option${_attr_option_value("b")}>b</option><option${_attrs({
			value: "c",
			...input.c
		}, "d", $scope0_id, "option", 0, $scope0_reason, 2)}>c</option>${_el_resume($scope0_id, "d")}</select>`);
	}, 0, 0, 0, "wEa");
	_html(`${_el_resume($scope0_id, "a")}<span>${_text_resume($scope0_id, "e", v)}</span><button>t</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, { l: v });
}, 1);
