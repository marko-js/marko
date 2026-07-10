// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let i = 0;
	_html(`<input pattern=${i % 2 ? "^b+$" : "^a+$"}>${_el_resume($scope0_id, "a")}<button>Update</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: i });
	_resume_branch($scope0_id);
}, 1);
