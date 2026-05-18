// tags/radio.marko
var radio_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "radio",
		...input
	}, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checkedValue = "a";
	const $checkedValueChange = _resume((_new_checkedValue) => {
		checkedValue = _new_checkedValue;
	}, "a0", $scope0_id);
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
	_html(`<span>${_escape(checkedValue)}${_el_resume($scope0_id, "d")}</span>`);
	writeScope($scope0_id, {
		f: $checkedValueChange,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
