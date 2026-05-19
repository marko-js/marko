// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value)}${_attr_class(input.class)}>${_el_resume($scope0_id, "#input/0", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { value, ...rest } = input;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	child_default({
		value,
		...rest
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const Wrap = wrap_default;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=value-missing>");
	wrap_default({ class: "foo" });
	_html("</div><div id=value-undefined>");
	wrap_default({
		class: "foo",
		value: undefined
	});
	_html("</div><div id=value-set>");
	wrap_default({
		class: "foo",
		value: "abcd"
	});
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "#text/3", Wrap, { class: "bar" }, 0, 0, 0);
	_html("</div>");
}, 1);
