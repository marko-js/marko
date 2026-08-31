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
	const tag = "input";
	_dynamic_tag($scope0_id, "a", tag, {
		value: state.a,
		valueChange: state.aChange
	});
	_dynamic_tag($scope0_id, "b", tag, {
		value: state?.b,
		valueChange: state?.bChange
	});
	_html(`<div>${_text_resume($scope0_id, "c", a)}|${_text_resume($scope0_id, "d", b, 2)}</div>`);
	writeScope($scope0_id, {
		e: a,
		f: b,
		j: state.aChange,
		l: state.bChange,
		m: tag
	});
	_resume_branch($scope0_id);
}, 1);
