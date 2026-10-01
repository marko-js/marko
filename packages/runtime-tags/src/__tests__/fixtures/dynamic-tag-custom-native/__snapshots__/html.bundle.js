// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { id } = input;
	_html(`<div>Id is ${_text_resume($scope0_id, "a", id, $wg__input_id * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = child_default;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", tagName, { id: "dynamic" });
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: tagName });
}, 1);
