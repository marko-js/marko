// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = [1];
	_attr_select_value($scope0_id, "#select/0", selected, _resume(function(v) {
		selected = v.map((it) => Number(it));
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html(`<select multiple><option${_attr_option_value(0)}></option><option${_attr_option_value("1")}></option><option${_attr_option_value(2)}></option></select>`);
	});
	_html(`${_el_resume($scope0_id, "#select/0")}<span>${_escape(selected)}${_el_resume($scope0_id, "#text/1")}</span><button>Reset</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
