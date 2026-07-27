// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	let rest = { placeholder: "p" };
	_html(`<button>respread</button>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "b", v, _resume((_new_v) => {
		v = _new_v;
	}, "a0", $scope0_id))}${_attrs_partial(rest, {
		value: 1,
		valueChange: 1
	}, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<div>${_escape(v)}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, { e: rest });
	_resume_branch($scope0_id);
}, 1);
