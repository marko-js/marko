// tags/echo.marko
var echo_default = _template("__tests__/tags/echo.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=echo>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/echo.marko", 0);
});

// tags/my-box.marko
var my_box_default = _template("__tests__/tags/my-box.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	echo_default(input);
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input");
	writeScope($scope0_id, {
		input,
		"#childScope/1": _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/tags/my-box.marko", 0, { input: 0 });
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
