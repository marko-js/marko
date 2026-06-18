// tags/my-div.marko
var my_div_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<button`);
	_attrs_content({
		foo: 1,
		...input
	}, "b", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "b")}<span${_attrs(input, "c", $scope0_id, "span")}>Overridden</span>${_el_resume($scope0_id, "c")}<output${_attrs(input, "d", $scope0_id, "output")}>`);
	_attr_content("d", $scope0_id, void 0);
	_html(`</output>${_el_resume($scope0_id, "d")}`);
	const CustomContent = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("Custom content");
	}, $scope0_id) };
	_html(`<strong${_attrs(input, "e", $scope0_id, "strong")}>`);
	_attr_content("e", $scope0_id, CustomContent.content);
	_html(`</strong>${_el_resume($scope0_id, "e")}<p`);
	_attrs_content({
		content: CustomContent.content,
		...input
	}, "f", $scope0_id, "p");
	_html(`</p>${_el_resume($scope0_id, "f")}<em>`);
	_attr_content("g", $scope0_id, CustomContent, 0);
	_html("</em>");
	_script($scope0_id, "b1");
	_script($scope0_id, "b2");
	writeScope($scope0_id, { k: CustomContent?.content });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	my_div_default({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("Hello");
	}) });
}, 1);
