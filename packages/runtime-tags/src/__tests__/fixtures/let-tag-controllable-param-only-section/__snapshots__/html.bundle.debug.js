// tags/ctl.marko
var ctl_default = _template("__tests__/tags/ctl.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<button>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/ctl.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/ctl.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, 0, 1);
	_scope($scope0_id, {
		count: _serialize_if($scope0_reason, 0) && count,
		"TagVariableChange:count": input.countChange || void 0
	}, "__tests__/tags/ctl.marko", 0, {
		count: "1:6",
		"TagVariableChange:count": ["countChange", "1:6"]
	});
	$sg__input_show || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let total = 0;
	ctl_default({
		show: true,
		countChange: _resume(function(v) {
			total = v * 10;
		}, "__tests__/template.marko_0/countChange", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "#text/1", total)}</span>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
