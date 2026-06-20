// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = "dyn";
	const more = ["m1"];
	const moreStyles = ["display:block"];
	const obj = { o: true };
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div${_attr_class([
		"a",
		["b", d],
		...more,
		...["n1", d],
		{
			["computed"]: d,
			...obj,
			"q": d
		}
	])}></div>${_el_resume($scope0_id, "b")}<div${_attr_style([
		"color:red",
		["margin:0", "padding:0"],
		...moreStyles
	])}></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d,
		e: more,
		f: moreStyles,
		h: obj
	});
	_resume_branch($scope0_id);
}, 1);
