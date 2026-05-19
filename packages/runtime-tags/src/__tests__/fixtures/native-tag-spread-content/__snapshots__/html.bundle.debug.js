// tags/my-div.marko
var my_div_default = _template("__tests__/tags/my-div.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<button`);
	_attrs_content({
		foo: 1,
		...input
	}, "#button/1", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "#button/1")}<span${_attrs(input, "#span/2", $scope0_id, "span")}>Overridden</span>${_el_resume($scope0_id, "#span/2")}<output${_attrs(input, "#output/3", $scope0_id, "output")}>`);
	_attr_content("#output/3", $scope0_id, undefined);
	_html(`</output>${_el_resume($scope0_id, "#output/3")}`);
	const CustomContent = { content: _content_resume("__tests__/tags/my-div.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Custom content");
	}, $scope0_id) };
	_html(`<strong${_attrs(input, "#strong/4", $scope0_id, "strong")}>`);
	_attr_content("#strong/4", $scope0_id, CustomContent.content);
	_html(`</strong>${_el_resume($scope0_id, "#strong/4")}<p`);
	_attrs_content({
		content: CustomContent.content,
		...input
	}, "#p/5", $scope0_id, "p");
	_html(`</p>${_el_resume($scope0_id, "#p/5")}<em>`);
	_attr_content("#em/6", $scope0_id, CustomContent, 0);
	_html("</em>");
	_script($scope0_id, "__tests__/tags/my-div.marko_0_input_CustomContent_content");
	_script($scope0_id, "__tests__/tags/my-div.marko_0_input");
	writeScope($scope0_id, {
		input,
		CustomContent_content: CustomContent?.content
	}, "__tests__/tags/my-div.marko", 0, {
		input: 0,
		CustomContent_content: ["CustomContent.content", "10:8"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_div_default({ content: _content_resume("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("Hello");
	}, $scope0_id) });
}, 1);
