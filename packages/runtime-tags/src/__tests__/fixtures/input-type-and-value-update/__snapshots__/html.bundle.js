// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_v__OR__input_t = _serialize_guard($scope0_reason, 0), $sg__input_v__OR__input_t__OR__input_checked = _serialize_guard($scope0_reason, 1), $sg__input_t = _serialize_guard($scope0_reason, 4), $si__input_v__OR__input_t = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.v)}${_attr("type", input.t)} class=a>${_el_resume($scope0_id, "a", $sg__input_v__OR__input_t)}<input class=b${_attrs_partial(input.attrs, { class: 1 }, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<input${_attr_input_value($scope0_id, "c", input.v)}${_attr("type", input.t)} class=c>${_el_resume($scope0_id, "c", $sg__input_v__OR__input_t)}<input class=d${_attrs_partial({
		...input.rest,
		type: input.t,
		value: input.v
	}, { class: 1 }, "d", $scope0_id, "input")}>${_el_resume($scope0_id, "d")}<input class=e${_attrs_partial({
		...input.rest,
		type: input.t
	}, { class: 1 }, "e", $scope0_id, "input")}>${_el_resume($scope0_id, "e")}<input${_attr_input_checked($scope0_id, "f", input.checked)}${_attr("type", input.t)}${_attr("value", input.v)} class=f>${_el_resume($scope0_id, "f", $sg__input_v__OR__input_t__OR__input_checked)}<input${_attr_input_checkedValue($scope0_id, "g", input.checked, void 0, input.v)}${_attr("type", input.t)} class=g>${_el_resume($scope0_id, "g", $sg__input_v__OR__input_t__OR__input_checked)}<input value=s${_attr("type", input.t)} class=h>${_el_resume($scope0_id, "h", $sg__input_t)}<input${_attr("type", input.t)} class=i>${_el_resume($scope0_id, "i", $sg__input_t)}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		l: _serialize_if($scope0_reason, 3) && input.v,
		m: _serialize_if($scope0_reason, 2) && input.t,
		p: $si__input_v__OR__input_t && input.rest,
		s: $si__input_v__OR__input_t && input.checked
	});
}, 1);
