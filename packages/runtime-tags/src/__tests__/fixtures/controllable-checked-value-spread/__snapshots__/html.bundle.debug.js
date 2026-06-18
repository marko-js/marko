// tags/radio.marko
var radio_default = _template("__tests__/tags/radio.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "radio",
		...input
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/radio.marko_0_input");
	writeScope($scope0_id, {}, "__tests__/tags/radio.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checkedValue = "a";
	const $checkedValueChange = _resume((_new_checkedValue) => {
		checkedValue = _new_checkedValue;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
	const $childScope = _peek_scope_id();
	radio_default({
		checkedValue,
		checkedValueChange: $checkedValueChange,
		value: "a"
	});
	const $childScope2 = _peek_scope_id();
	radio_default({
		checkedValue,
		checkedValueChange: $checkedValueChange,
		value: "b"
	});
	const $childScope3 = _peek_scope_id();
	radio_default({
		checkedValue,
		checkedValueChange: $checkedValueChange,
		value: "c"
	});
	_html(`<span>${_escape(checkedValue)}${_el_resume($scope0_id, "#text/3")}</span>`);
	writeScope($scope0_id, {
		$checkedValueChange,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/2": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { $checkedValueChange: 0 });
	_resume_branch($scope0_id);
}, 1);
