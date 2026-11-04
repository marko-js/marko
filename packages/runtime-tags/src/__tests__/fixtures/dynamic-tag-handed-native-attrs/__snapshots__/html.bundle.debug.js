// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_c = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.tag, { class: input.c }, 0, 0, $wg__input_tag__OR__input_c);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_tag: _write_if($scope0_reason, 2) && input.tag,
		input_c: _write_if($scope0_reason, 1) && input.c
	}, "__tests__/tags/one.marko", 0, {
		input_tag: ["input.tag"],
		input_c: ["input.c"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		tag: "div",
		c: input.y
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
