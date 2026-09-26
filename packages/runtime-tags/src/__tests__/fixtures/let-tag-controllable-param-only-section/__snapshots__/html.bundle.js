// tags/ctl.marko
var ctl_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<button>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, 0, 1);
	_scope($scope0_id, {
		f: _serialize_if($scope0_reason, 0) && count,
		g: input.countChange || void 0
	});
	$sg__input_show || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let total = 0;
	ctl_default({
		show: true,
		countChange: _resume(function(v) {
			total = v * 10;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "b", total)}</span>`);
	_scope($scope0_id, {});
}, 1);
