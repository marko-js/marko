// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_signal_read_error() ? " class=live" : ""}></div><input${_attr_input_checked($scope0_id, "#input/1", _signal_read_error())} type=checkbox>`);
	_resume_branch($scope0_id);
}, 1);
