// tags/a.marko
var a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_resume($scope0_id, "a", input.x, $sg__input_x * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/b.marko
var b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>B ${_text_resume($scope0_id, "a", input.x, $sg__input_x * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useB = false;
	_dynamic_tag($scope0_id, "a", a_default, { x: 1 }, _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id));
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: useB });
}, 1);
