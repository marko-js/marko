// tags/my-box.marko
var my_box_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const extra = { id: "x" };
	_html("<div");
	_attrs_content({
		...input,
		...extra
	}, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	my_box_default({
		class: "base",
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Hello");
		})
	});
}, 1);
