// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const double = 2;
	_html(`<div>${_escape(double == null ? "none" : double)}${_el_resume($scope0_id, "a")}</div><button>clear</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
