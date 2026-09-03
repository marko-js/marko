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
	const tag = "input";
	_dynamic_tag($scope0_id, "#text/0", tag, {
		value: state.a,
		valueChange: state.aChange
	});
	_dynamic_tag($scope0_id, "#text/1", tag, {
		value: state?.b,
		valueChange: state?.bChange
	});
	_html(`<div>${_text_resume($scope0_id, "#text/2", a)}|${_text_resume($scope0_id, "#text/3", b, 2)}</div>`);
	_scope($scope0_id, {
		a,
		b,
		state_aChange: state.aChange,
		state_bChange: state.bChange,
		tag
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6",
		state_aChange: ["state.aChange", "3:8"],
		state_bChange: ["state.bChange", "3:8"],
		tag: "9:8"
	});
}, 1);
