// tags/my-tag.marko
var my_tag_default = _template("__tests__/tags/my-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { as: inputAs, class: inputClass, content: inputContent, ...htmlInput } = input;
	const startContent = { content: _content("__tests__/tags/my-tag.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("default");
	}) };
	let content = startContent;
	_dynamic_tag($scope0_id, "#text/0", inputAs || "div", {
		...htmlInput,
		class: ["foo", inputClass],
		content
	});
	_script($scope0_id, "__tests__/tags/my-tag.marko_0_inputContent");
	writeScope($scope0_id, {
		inputAs,
		inputClass,
		inputContent,
		htmlInput,
		content: _serialize_if($scope0_reason, 0) && content
	}, "__tests__/tags/my-tag.marko", 0, {
		inputAs: "1:13",
		inputClass: "1:29",
		inputContent: "1:50",
		htmlInput: "1:67",
		content: "6:5"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_tag_default({ content: _content_resume("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("Div");
	}, $scope0_id) });
	my_tag_default({
		as: "span",
		content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("Span");
		}, $scope0_id)
	});
}, 1);
