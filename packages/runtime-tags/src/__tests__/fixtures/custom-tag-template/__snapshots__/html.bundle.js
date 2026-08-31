// hello.marko
var hello_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`Hello ${_text_resume($scope0_id, "a", input.name, _serialize_guard($scope0_reason, 0) * 2)}!`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	hello_default({ name: "Frank" });
}, 1);
