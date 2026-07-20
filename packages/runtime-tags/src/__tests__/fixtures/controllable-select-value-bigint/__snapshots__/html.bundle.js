// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0n;
	_attr_select_value($scope0_id, "a", value, _resume(function(v) {
		value = v;
	}, "a0", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("")}>empty</option><option${_attr_option_value(0)}>zero</option><option${_attr_option_value(1)}>one</option></select>`);
	});
	_html(_el_resume($scope0_id, "a"));
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
