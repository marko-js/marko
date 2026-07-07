// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const y = 2;
	const z = 3;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		b: count,
		c: y,
		d: z
	});
	_resume_branch($scope0_id);
}, 1);
