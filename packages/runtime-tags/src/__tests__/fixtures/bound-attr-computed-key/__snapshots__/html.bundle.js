// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "v1";
	let wrong = "";
	const key = "v";
	const state = {
		v,
		vChange(x) {
			v = x;
		},
		keyChange(x) {
			wrong = x;
		}
	};
	_html(`<div>v=<!>${_escape(v)}${_el_resume($scope0_id, "a")}|wrong=<!>${_escape(wrong)}${_el_resume($scope0_id, "b")}</div><input${_attr_input_value($scope0_id, "c", state[key], state["vChange"])}>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { f: key });
	_resume_branch($scope0_id);
}, 1);
