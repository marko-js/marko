// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
	_attr_select_value($scope0_id, "a", selected, _resume(function(v) {
		selected = +v;
	}, "a0", $scope0_id), () => {
		_html(`<select><option${_attr_option_value(0)}></option><option${_attr_option_value("1")}></option><option${_attr_option_value(2)}></option></select>`);
	});
	_html(`${_el_resume($scope0_id, "a")}<span>${_escape(selected)}${_el_resume($scope0_id, "b")}</span><button>Reset</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
