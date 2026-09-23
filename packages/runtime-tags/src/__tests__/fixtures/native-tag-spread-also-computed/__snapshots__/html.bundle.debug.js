// template.marko
function withCount(attrs, count) {
	return {
		...attrs,
		"data-count": count
	};
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<div");
	_attrs_content(input.attrs, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<div`);
	_attrs_content(withCount(input.attrs, count), "#div/1", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/1")}<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#5_count#6");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#5");
	_scope($scope0_id, {
		input_attrs: input.attrs,
		count
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		count: "4:6",
		"EventAttributes:#div/0": ["...input.attrs", "5:9"],
		"EventAttributes:#div/1": ["...withCount(input.attrs, count)", "6:9"]
	});
}, 1);
