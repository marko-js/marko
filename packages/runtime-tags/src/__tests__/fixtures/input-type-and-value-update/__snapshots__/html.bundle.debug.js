// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_v__OR__input_t = _serialize_guard($scope0_reason, 0), $sg__input_v__OR__input_t__OR__input_checked = _serialize_guard($scope0_reason, 1), $sg__input_t = _serialize_guard($scope0_reason, 4), $si__input_v__OR__input_t = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.v)}${_attr("type", input.t)} class=a>${_el_resume($scope0_id, "#input/0", $sg__input_v__OR__input_t)}<input class=b${_attrs_partial(input.attrs, { class: 1 }, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_value($scope0_id, "#input/2", input.v)}${_attr("type", input.t)} class=c>${_el_resume($scope0_id, "#input/2", $sg__input_v__OR__input_t)}<input class=d${_attrs_partial({
		...input.rest,
		type: input.t,
		value: input.v
	}, { class: 1 }, "#input/3", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/3")}<input class=e${_attrs_partial({
		...input.rest,
		type: input.t
	}, { class: 1 }, "#input/4", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/4")}<input${_attr_input_checked($scope0_id, "#input/5", input.checked)}${_attr("type", input.t)}${_attr("value", input.v)} class=f>${_el_resume($scope0_id, "#input/5", $sg__input_v__OR__input_t__OR__input_checked)}<input${_attr_input_checkedValue($scope0_id, "#input/6", input.checked, void 0, input.v)}${_attr("type", input.t)} class=g>${_el_resume($scope0_id, "#input/6", $sg__input_v__OR__input_t__OR__input_checked)}<input value=s${_attr("type", input.t)} class=h>${_el_resume($scope0_id, "#input/7", $sg__input_t)}<input${_attr("type", input.t)} class=i>${_el_resume($scope0_id, "#input/8", $sg__input_t)}`);
	_script($scope0_id, "__tests__/template.marko_0_input_t#12_input_rest#15");
	_script($scope0_id, "__tests__/template.marko_0_input_v#11_input_t#12_input_rest#15");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#14");
	_scope($scope0_id, {
		input_v: _serialize_if($scope0_reason, 3) && input.v,
		input_t: _serialize_if($scope0_reason, 2) && input.t,
		input_rest: $si__input_v__OR__input_t && input.rest,
		input_checked: $si__input_v__OR__input_t && input.checked
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_t: ["input.t"],
		input_rest: ["input.rest"],
		input_checked: ["input.checked"],
		"ControlledHandler:#input/1": ["...input.attrs", "2:13"],
		"EventAttributes:#input/1": ["...input.attrs", "2:13"],
		"ControlledHandler:#input/3": ["...input.rest", "4:13"],
		"EventAttributes:#input/3": ["...input.rest", "4:13"],
		"ControlledHandler:#input/4": ["...input.rest", "5:13"],
		"EventAttributes:#input/4": ["...input.rest", "5:13"]
	});
}, 1);
