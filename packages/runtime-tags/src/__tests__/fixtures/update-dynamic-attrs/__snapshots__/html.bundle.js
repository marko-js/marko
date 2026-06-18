// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	_html("<div");
	_attrs_content(input.value, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<div`);
	_attrs_content({
		a,
		...input.value
	}, "b", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "b")}<div${_attr("a", a)}`);
	_attrs_partial_content(input.value, { a: 1 }, "c", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { g: a });
	_resume_branch($scope0_id);
}, 1);
