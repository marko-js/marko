// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let checkedValue = "a";
	const $checkedValueChange = _resume((_new_checkedValue) => {
		checkedValue = _new_checkedValue;
	}, "a0", $scope0_id);
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", checkedValue, $checkedValueChange, "a")} type=radio>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_checkedValue($scope1_id, "a", checkedValue, $checkedValueChange, "b")} type=radio>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<input${_attr_input_checkedValue($scope0_id, "c", checkedValue, $checkedValueChange, "c")} type=radio>${_el_resume($scope0_id, "c")}<span>${_escape(checkedValue)}${_el_resume($scope0_id, "d")}</span><button>Toggle</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		f: show,
		g: checkedValue,
		h: $checkedValueChange
	});
	_resume_branch($scope0_id);
}, 1);
