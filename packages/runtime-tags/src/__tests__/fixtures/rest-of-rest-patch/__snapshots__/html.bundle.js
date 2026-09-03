// tags/echo/index.marko
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_skip = _serialize_guard($scope0_reason, 1), $sg__input_label = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { skip, ...r } = input;
	const { ...s } = r;
	_html(`<em>${_text_resume($scope0_id, "a", skip, $sg__input_skip)}${_text_resume($scope0_id, "b", s.label, $sg__input_label * 2)}</em>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html("<main>");
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	echo_default({
		skip: "k",
		label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: label,
		a: _existing_scope($childScope)
	});
}, 1);
