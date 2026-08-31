// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_v = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let bound = input.v;
	_html(`<textarea id=attr>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "a", $sg__input_v)}<textarea id=bound>${_attr_textarea_value($scope0_id, "b", bound, _resume((_new_bound) => {
		bound = _new_bound;
	}, "a0", $scope0_id))}</textarea>${_el_resume($scope0_id, "b")}<textarea id=body>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "c", $sg__input_v)}<p id=text>${_text_resume($scope0_id, "d", input.v, $sg__input_v)}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
