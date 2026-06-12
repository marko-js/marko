// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [first, second] = [
		1,
		2,
		3
	];
	_html(`<div>${_escape(first)}${_el_resume($scope0_id, "a")}|<!>${_escape(second)}${_el_resume($scope0_id, "b")}</div><button>update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
