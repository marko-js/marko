// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = undefined;
	let baz = "baz";
	const alwaysFoo = "foo" || _id();
	const sometimesBar = bar || _id();
	const sometimesBaz = baz || _id();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div${_attr("id", alwaysFoo)}>foo</div><div${_attr("id", sometimesBar)}>bar</div>${_el_resume($scope0_id, "#div/2")}<div${_attr("id", sometimesBaz)}>baz</div>${_el_resume($scope0_id, "#div/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_bar_baz");
	writeScope($scope0_id, {
		bar,
		baz
	}, "__tests__/template.marko", 0, {
		bar: "1:5",
		baz: "2:5"
	});
	_resume_branch($scope0_id);
}, 1);
