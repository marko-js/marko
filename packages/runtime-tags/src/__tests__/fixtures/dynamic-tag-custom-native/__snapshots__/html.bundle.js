// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { id } = input;
	_html(`<div>Id is ${_sep($sg__input_id)}${_escape(id)}${_el_resume($scope0_id, "a", $sg__input_id)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = child_default;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", tagName, { id: "dynamic" });
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: tagName });
	_resume_branch($scope0_id);
}, 1);
