// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const value = input.value;
	_html(`${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "a", $sg__input_value)} `);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "y";
	child_default({ value: 3 });
	child_default({ value: x });
	_resume_branch($scope0_id);
}, 1);
