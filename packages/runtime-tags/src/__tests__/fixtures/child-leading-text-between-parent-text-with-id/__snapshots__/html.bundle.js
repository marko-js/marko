// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_class = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const x = _id();
	_html(` <span${_attr_class(input.class)}${_attr("id", x)}></span>${_el_resume($scope0_id, "a", $sg__input_class)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>before ");
	child_default({ class: "inner" });
	_html(" after</div>");
}, 1);
