// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr("disabled", true)}>${_el_resume($scope0_id, "a")}<button>enable${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: void 0 });
	_resume_branch($scope0_id);
}, 1);
