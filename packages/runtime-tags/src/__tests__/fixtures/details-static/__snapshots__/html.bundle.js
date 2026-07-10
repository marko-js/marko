// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>inc <!>${_escape(1)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<details><summary>summary</summary> body</details><dialog>dialog body</dialog>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: void 0 });
	_resume_branch($scope0_id);
}, 1);
