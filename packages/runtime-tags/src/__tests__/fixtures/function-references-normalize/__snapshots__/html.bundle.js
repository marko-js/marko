// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = { bar: "bar" };
	const baz = {
		foo,
		bar: _resume(() => foo.bar, "a0", $scope0_id)
	};
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		b: foo,
		c: baz
	});
	_resume_branch($scope0_id);
}, 1);
