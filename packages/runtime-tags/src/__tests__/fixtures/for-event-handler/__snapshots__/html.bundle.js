// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let num = 0;
	_for_to(num, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(i)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	writeScope($scope0_id, { b: num });
	_resume_branch($scope0_id);
}, 1);
