// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const y = count + 1;
	const z = count + 2;
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
