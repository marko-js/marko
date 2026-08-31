// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [first, second] = [
		1,
		2,
		3
	];
	_html(`<div>${_text_resume($scope0_id, "a", first)}|${_text_resume($scope0_id, "b", second, 2)}</div><button>update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
