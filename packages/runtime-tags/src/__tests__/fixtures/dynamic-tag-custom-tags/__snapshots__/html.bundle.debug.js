// tags/child1.marko
var child1_default = _template("__tests__/tags/child1.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`<div>Child 1 has ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "#text/0", $sg__input_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child1.marko", 0);
});

// tags/child2.marko
var child2_default = _template("__tests__/tags/child2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`<div>Child 2 has ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "#text/0", $sg__input_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child2.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = child1_default;
	let val = 3;
	_dynamic_tag($scope0_id, "#text/0", tagName, { value: val });
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_tagName");
	writeScope($scope0_id, {
		tagName,
		val
	}, "__tests__/template.marko", 0, {
		tagName: "4:6",
		val: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
