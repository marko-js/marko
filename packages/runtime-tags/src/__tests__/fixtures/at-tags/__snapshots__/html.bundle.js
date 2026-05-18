// tags/hello/index.marko
var hello_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.foo, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	hello_default({ foo: attrTag({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("Foo!");
	}) }) });
}, 1);
