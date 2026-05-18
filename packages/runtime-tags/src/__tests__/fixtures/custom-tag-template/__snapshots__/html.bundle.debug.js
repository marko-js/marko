// hello.marko
var hello_default = _template("__tests__/hello.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`Hello ${_sep($sg__input_name)}${_escape(input.name)}${_el_resume($scope0_id, "#text/0", $sg__input_name)}!`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/hello.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	hello_default({ name: "Frank" });
}, 1);
