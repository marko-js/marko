// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tag = "input";
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", tag, {});
	_attr_select_value($scope0_id, "#select/1", void 0, _resume(function(next) {
		tag = next;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("a")}>a</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "#select/1")}<button>Swap</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { tag }, "__tests__/template.marko", 0, { tag: "1:6" });
	_resume_branch($scope0_id);
}, 1);
