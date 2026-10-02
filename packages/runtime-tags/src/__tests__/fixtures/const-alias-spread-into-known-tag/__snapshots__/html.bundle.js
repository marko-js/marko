// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_class = _write_guard($scope0_reason, 1), $wg__input_value = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}>${_text_resume($scope0_id, "b", input.value, $wg__input_value)}</div>${_el_resume($scope0_id, "a", $wg__input_class)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({
		class: "c",
		value: "d"
	});
}, 1);
