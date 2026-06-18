// tags/my-box.marko
var my_box_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let captured = "(unchecked)";
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<button type=button class=cap>check</button>${_el_resume($scope0_id, "b")}<div class=out>${_escape(captured)}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		e: input,
		f: input.content
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	my_box_default({
		class: "x",
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Hello");
		}, _scope_id())
	});
}, 1);
