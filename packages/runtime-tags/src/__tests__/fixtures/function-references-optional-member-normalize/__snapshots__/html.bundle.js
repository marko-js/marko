// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = void 0;
	const a = {
		foo,
		bar: _resume(() => foo?.bar, "a0", $scope0_id)
	};
	const b = {
		foo,
		baz: _resume(() => foo?.bar.baz, "a1", $scope0_id)
	};
	const c = {
		foo: foo?.bar,
		baz: _resume(() => foo?.bar.baz, "a2", $scope0_id)
	};
	_html(`<div></div>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "b")}<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		d: foo,
		e: foo?.bar,
		f: a,
		g: b,
		h: c
	});
	_resume_branch($scope0_id);
}, 1);
