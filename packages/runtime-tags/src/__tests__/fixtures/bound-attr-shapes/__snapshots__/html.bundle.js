// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "a1";
	let b = "b1";
	const state = {
		a,
		aChange: _resume(function(v) {
			a = v;
		}, "a0", $scope0_id),
		b,
		bChange: _resume(function(v) {
			b = v;
		}, "a1", $scope0_id)
	};
	_html(`<div>${_escape(a)}${_el_resume($scope0_id, "a")}|<!>${_escape(b)}${_el_resume($scope0_id, "b")}</div><input${_attr_input_value($scope0_id, "c", state.a, state.aChange)}>${_el_resume($scope0_id, "c")}<input${_attr_input_value($scope0_id, "d", state?.b, state?.bChange)}>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: a,
		f: b,
		i: state.a,
		j: state.aChange,
		l: state.b,
		m: state.bChange
	});
	_resume_branch($scope0_id);
}, 1);
