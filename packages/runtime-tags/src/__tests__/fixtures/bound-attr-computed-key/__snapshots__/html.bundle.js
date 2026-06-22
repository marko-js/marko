// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "v1";
	let wrong = "";
	const state = {
		v,
		vChange: _resume(function(x) {
			v = x;
		}, "a0", $scope0_id),
		keyChange: _resume(function(x) {
			wrong = x;
		}, "a1", $scope0_id)
	};
	_html(`<div>v=<!>${_escape(v)}${_el_resume($scope0_id, "a")}|wrong=<!>${_escape(wrong)}${_el_resume($scope0_id, "b")}</div><input${_attr_input_value($scope0_id, "c", state["v"], state["vChange"])}>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { g: state });
	_resume_branch($scope0_id);
}, 1);
