// tags/echo.marko
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=echo>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/my-box.marko
var my_box_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input.head, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	echo_default(input.head);
	_script($scope0_id, "c0");
	writeScope($scope0_id, {
		e: input.head,
		b: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	my_box_default({ head: attrTag({
		class: "h",
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Hello");
		}, _scope_id())
	}) });
}, 1);
