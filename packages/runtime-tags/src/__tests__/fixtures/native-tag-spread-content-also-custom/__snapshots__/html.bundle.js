// tags/echo.marko
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=echo>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/my-box.marko
var my_box_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	const $childScope = _peek_scope_id();
	echo_default(input);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		d: input,
		b: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
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
