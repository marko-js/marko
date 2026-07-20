// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = NaN;
	_attr_select_value($scope0_id, "#select/0", value, _resume(function(v) {
		value = v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("")}>empty</option><option${_attr_option_value(NaN)}>nan</option><option${_attr_option_value(0)}>zero</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/0"));
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
