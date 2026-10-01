// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let bound = input.v;
	_html(`<textarea id=attr>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "a", $wg__input_v)}<textarea id=bound>${_attr_textarea_value($scope0_id, "b", bound, _resume((_new_bound) => {
		bound = _new_bound;
	}, "a0", $scope0_id))}</textarea>${_el_resume($scope0_id, "b")}<textarea id=body>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "c", $wg__input_v)}<p id=text>${_text_resume($scope0_id, "d", input.v, $wg__input_v)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
