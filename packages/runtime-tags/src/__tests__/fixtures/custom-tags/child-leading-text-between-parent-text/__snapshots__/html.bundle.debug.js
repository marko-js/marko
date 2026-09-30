// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_class = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`X<span${_attr_class(input.class)}></span>${_el_resume($scope0_id, "#span/0", $sg__input_class)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>before ");
	child_default({ class: "inner" });
	_html(" after</div><div>a >");
	child_default({ class: "inner" });
	_html(" b</div>");
}, 1);
