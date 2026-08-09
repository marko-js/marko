// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_v = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let bound = input.v;
	_html(`<textarea id=attr>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "#textarea/0", $sg__input_v)}<textarea id=bound>${_attr_textarea_value($scope0_id, "#textarea/1", bound, _resume((_new_bound) => {
		bound = _new_bound;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}</textarea>${_el_resume($scope0_id, "#textarea/1")}<textarea id=body>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "#textarea/2", $sg__input_v)}<p id=text>${_escape(input.v)}${_el_resume($scope0_id, "#text/3", $sg__input_v)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#textarea/1": ["valueChange"] });
	_resume_branch($scope0_id);
}, 1);
