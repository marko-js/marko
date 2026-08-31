// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "v1";
	let wrong = "";
	const key = "v";
	const state = {
		v,
		vChange: _resume(function(x) {
			v = x;
		}, "a0", $scope0_id),
		keyChange: _resume(function(x) {
			wrong = x;
		}, "a1", $scope0_id)
	};
	_html(`<div>v=${_text_resume($scope0_id, "a", v, 2)}|wrong=${_text_resume($scope0_id, "b", wrong, 2)}</div><input${_attr_input_value($scope0_id, "c", state[key], state["vChange"])}>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: key,
		g: state
	});
	_resume_branch($scope0_id);
}, 1);
