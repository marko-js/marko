// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value)}${_attr_class(input.class)}>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	child_default(input);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const Wrap = wrap_default;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=known>");
	wrap_default({ class: "foo" });
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "b", Wrap, { class: "bar" }, 0, 0, 0);
	_html("</div>");
}, 1);
