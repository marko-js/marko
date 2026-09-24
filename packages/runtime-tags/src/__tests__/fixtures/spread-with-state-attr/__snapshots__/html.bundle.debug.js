// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let title = "a";
	_html("<div");
	_attrs_content({
		title,
		...input.attrs
	}, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<button>update</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#4_title#5");
	_scope($scope0_id, {
		input_attrs: input.attrs,
		title: _serialize_if($scope0_reason, 0) && title
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		title: "1:6",
		"EventAttributes:#div/0": ["...input.attrs", "2:21"]
	});
}, 1);
