// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = undefined;
	const a = {
		foo,
		bar: _resume(() => foo?.bar, "__tests__/template.marko_0/a", $scope0_id)
	};
	const b = {
		foo,
		baz: _resume(() => foo?.bar.baz, "__tests__/template.marko_0/b", $scope0_id)
	};
	const c = {
		foo: foo?.bar,
		baz: _resume(() => foo?.bar.baz, "__tests__/template.marko_0/c", $scope0_id)
	};
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}<div></div>${_el_resume($scope0_id, "#div/1")}<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_c");
	_script($scope0_id, "__tests__/template.marko_0_b");
	_script($scope0_id, "__tests__/template.marko_0_a");
	writeScope($scope0_id, {
		foo,
		foo_bar: foo?.bar,
		a,
		b,
		c
	}, "__tests__/template.marko", 0, {
		foo: "1:5",
		foo_bar: ["foo.bar", "1:5"],
		a: "2:7",
		b: "7:7",
		c: "12:7"
	});
	_resume_branch($scope0_id);
}, 1);
