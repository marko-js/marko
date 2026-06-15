// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = "dyn";
	const more = ["m1"];
	const moreStyles = ["display:block"];
	const obj = { o: true };
	const k = "computed";
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}<div${_attr_class([
		"a",
		["b", d],
		...more,
		...["n1", d],
		{
			[k]: d,
			...obj,
			"q": d
		}
	])}></div>${_el_resume($scope0_id, "#div/1")}<div${_attr_style([
		"color:red",
		["margin:0", d && "padding:0"],
		...moreStyles
	])}></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_d");
	writeScope($scope0_id, {
		d,
		more,
		moreStyles,
		obj,
		k
	}, "__tests__/template.marko", 0, {
		d: "1:6",
		more: "2:8",
		moreStyles: "3:8",
		obj: "4:8",
		k: "5:8"
	});
	_resume_branch($scope0_id);
}, 1);
