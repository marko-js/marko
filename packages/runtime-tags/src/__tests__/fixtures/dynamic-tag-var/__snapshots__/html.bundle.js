// tags/child/index.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return 1;
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wg__input_dynamic = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	child_default({});
	_dynamic_tag($scope0_id, "c", input.show && child_default, {}, 0, 0, $wg__input_show);
	_dynamic_tag($scope0_id, "e", input.dynamic, {}, 0, 0, $wg__input_dynamic);
	_dynamic_tag($scope0_id, "g", input.show && "div", {}, 0, 0, $wg__input_show);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
