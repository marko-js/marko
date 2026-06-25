// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = "b";
	const $select_input = input.rest;
	_attr_select_value($scope0_id, "#select/1", $select_input.value, $select_input.valueChange, () => {
		_html(`<button>swap</button>${_el_resume($scope0_id, "#button/0")}<select${_attrs($select_input, "#select/1", $scope0_id, "select")}><option${_attr_option_value("a")}>a</option><option${_attr_option_value(n)}>dyn</option>${_el_resume($scope0_id, "#option/2")}</select>`);
	}, 1);
	_html(_el_resume($scope0_id, "#select/1"));
	_script($scope0_id, "__tests__/template.marko_0_input_rest");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
