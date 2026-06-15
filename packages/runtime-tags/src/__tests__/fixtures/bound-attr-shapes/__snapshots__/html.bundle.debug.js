// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "a1";
	let b = "b1";
	const state = {
		a,
		aChange: _resume(function(v) {
			a = v;
		}, "__tests__/template.marko_0/state", $scope0_id),
		b,
		bChange: _resume(function(v) {
			b = v;
		}, "__tests__/template.marko_0/state2", $scope0_id)
	};
	_html(`<div>${_escape(a)}${_el_resume($scope0_id, "#text/0")}|<!>${_escape(b)}${_el_resume($scope0_id, "#text/1")}</div><input${_attr_input_value($scope0_id, "#input/2", state.a, state.aChange)}>${_el_resume($scope0_id, "#input/2")}<input${_attr_input_value($scope0_id, "#input/3", state?.b, state?.bChange)}>${_el_resume($scope0_id, "#input/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		a,
		b,
		state_a: state.a,
		state_aChange: state.aChange,
		state_b: state.b,
		state_bChange: state.bChange
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6",
		state_a: ["state.a", "3:8"],
		state_aChange: ["state.aChange", "3:8"],
		state_b: ["state.b", "3:8"],
		state_bChange: ["state.bChange", "3:8"]
	});
	_resume_branch($scope0_id);
}, 1);
