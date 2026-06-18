// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	_html("<div");
	_attrs_content(input.value, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<div`);
	_attrs_content({
		a,
		...input.value
	}, "#div/1", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/1")}<div${_attr("a", a)}`);
	_attrs_partial_content(input.value, { a: 1 }, "#div/2", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_value_a");
	_script($scope0_id, "__tests__/template.marko_0_input_value");
	writeScope($scope0_id, { a }, "__tests__/template.marko", 0, { a: "1:6" });
	_resume_branch($scope0_id);
}, 1);
