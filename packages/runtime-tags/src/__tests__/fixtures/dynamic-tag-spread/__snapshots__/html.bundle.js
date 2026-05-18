// tags/wrapper.marko
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { as: inputAs, foo, ...htmlInput } = input;
	_dynamic_tag($scope0_id, "a", inputAs || "div", {
		...htmlInput,
		"data-foo": foo
	}, _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("hi");
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 3));
	_serialize_if($scope0_reason, 3) && writeScope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && inputAs,
		e: _serialize_if($scope0_reason, 1) && foo,
		f: _serialize_if($scope0_reason, 0) && htmlInput
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>");
	wrapper_default({ id: "foo" });
	_html("</div><div>");
	wrapper_default({
		id: "foo",
		foo: "bar"
	});
	_html("</div>");
}, 1);
