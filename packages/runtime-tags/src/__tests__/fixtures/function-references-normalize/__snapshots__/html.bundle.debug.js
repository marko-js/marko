// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = { bar: "bar" };
	const baz = {
		foo,
		bar: _resume(() => foo.bar, "__tests__/template.marko_0/baz", $scope0_id)
	};
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_baz");
	writeScope($scope0_id, {
		foo,
		baz
	}, "__tests__/template.marko", 0, {
		foo: "1:5",
		baz: "2:7"
	});
	_resume_branch($scope0_id);
}, 1);
