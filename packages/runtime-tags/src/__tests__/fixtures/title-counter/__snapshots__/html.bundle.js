// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<title>Count is ${_escape(count)}</title>${_el_resume($scope0_id, "a")}<button>+</button>${_el_resume($scope0_id, "b")}<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
