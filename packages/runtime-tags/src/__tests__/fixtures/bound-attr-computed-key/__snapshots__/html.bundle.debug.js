// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_html(`<div>v=<!>${_escape(v)}${_el_resume($scope0_id, "#text/0")}|wrong=<!>${_escape(wrong)}${_el_resume($scope0_id, "#text/1")}</div><input${_attr_input_value($scope0_id, "#input/2", state[key], state[key + "Change"])}>${_el_resume($scope0_id, "#input/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { key }, "__tests__/template.marko", 0, { key: "5:8" });
	_resume_branch($scope0_id);
}, 1);
