// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = "b";
	const $select_input = input.rest;
	_attr_select_value($scope0_id, "b", $select_input.value, $select_input.valueChange, () => {
		_html(`<button>swap</button>${_el_resume($scope0_id, "a")}<select${_attrs($select_input, "b", $scope0_id, "select")}><option${_attr_option_value("a")}>a</option><option${_attr_option_value(n)}>dyn</option>${_el_resume($scope0_id, "c")}</select>`);
	});
	_html(_el_resume($scope0_id, "b"));
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { f: input.rest });
	_resume_branch($scope0_id);
}, 1);
