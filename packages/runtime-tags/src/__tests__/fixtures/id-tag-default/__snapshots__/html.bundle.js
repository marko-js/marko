// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = void 0;
	let baz = "baz";
	const alwaysFoo = "foo";
	const sometimesBar = _id();
	const sometimesBaz = baz;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div${_attr("id", alwaysFoo)}>foo</div><div${_attr("id", sometimesBar)}>bar</div>${_el_resume($scope0_id, "c")}<div${_attr("id", sometimesBaz)}>baz</div>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: bar,
		f: baz
	});
	_resume_branch($scope0_id);
}, 1);
