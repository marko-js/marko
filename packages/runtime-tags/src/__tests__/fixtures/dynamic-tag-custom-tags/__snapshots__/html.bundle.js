// tags/child1.marko
var child1_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`<div>Child 1 has ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "a", $sg__input_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/child2.marko
var child2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`<div>Child 2 has ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "a", $sg__input_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = child1_default;
	let val = 3;
	_dynamic_tag($scope0_id, "a", tagName, { value: val });
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: tagName,
		d: val
	});
	_resume_branch($scope0_id);
}, 1);
