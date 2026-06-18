// tags/my-box.marko
var my_box_default = _template("__tests__/tags/my-box.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const extra = { id: "x" };
	_html("<div");
	_attrs_content({
		...input,
		...extra
	}, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input_extra");
	writeScope($scope0_id, {}, "__tests__/tags/my-box.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_box_default({
		class: "base",
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("Hello");
		})
	});
}, 1);
