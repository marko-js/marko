// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.foo)}${_attr("foo", "a" + input.foo + "b")}${_attr("bar", `a ${input.bar} b`)}${_attr("nested", `a ${input.foo + ` nested ${input.bar}`} b`)}></div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		input_foo: _serialize_if($scope0_reason, 2) && input.foo,
		input_bar: _serialize_if($scope0_reason, 1) && input.bar
	}, "__tests__/template.marko", 0, {
		input_foo: ["input.foo"],
		input_bar: ["input.bar"]
	});
}, 1);
