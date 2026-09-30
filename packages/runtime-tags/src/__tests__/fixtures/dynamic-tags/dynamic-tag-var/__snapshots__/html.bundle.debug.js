// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = 1;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1), $sg__input_dynamic = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let data1 = child_default({});
	let data2 = _dynamic_tag($scope0_id, "#text/2", input.show && child_default, {}, 0, 0, $sg__input_show);
	let data3 = _dynamic_tag($scope0_id, "#text/4", input.dynamic, {}, 0, 0, $sg__input_dynamic);
	let el1 = _dynamic_tag($scope0_id, "#text/6", input.show && "div", {}, 0, 0, $sg__input_show);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
