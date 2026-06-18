// tags/my-box.marko
var my_box_default = _template("__tests__/tags/my-box.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let captured = "(unchecked)";
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<button type=button class=cap>check</button>${_el_resume($scope0_id, "#button/1")}<div class=out>${_escape(captured)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input_content");
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input");
	writeScope($scope0_id, {
		input,
		input_content: input.content
	}, "__tests__/tags/my-box.marko", 0, {
		input: 0,
		input_content: ["input.content"]
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_box_default({
		class: "x",
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("Hello");
		}, $scope0_id)
	});
}, 1);
