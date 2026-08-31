// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	_html(`<button>${_text_resume($scope0_id, "b", 0)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: a,
		d: b
	});
	_resume_branch($scope0_id);
}, 1);
