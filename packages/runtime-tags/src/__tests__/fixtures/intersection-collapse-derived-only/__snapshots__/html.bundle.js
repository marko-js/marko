// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const doubled = count * 2;
	const tripled = count * 3;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div>${_escape(doubled + tripled)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
