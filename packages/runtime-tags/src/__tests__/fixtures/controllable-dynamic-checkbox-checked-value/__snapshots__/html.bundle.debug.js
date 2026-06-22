// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let checkedValue = "a";
	const $checkedValueChange = _resume((_new_checkedValue) => {
		checkedValue = _new_checkedValue;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", checkedValue, $checkedValueChange, "a")} type=radio>${_el_resume($scope0_id, "#input/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_checkedValue($scope1_id, "#input/0", checkedValue, $checkedValueChange, "b")} type=radio>${_el_resume($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1, 1);
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/2", checkedValue, $checkedValueChange, "c")} type=radio>${_el_resume($scope0_id, "#input/2")}<span>${_escape(checkedValue)}${_el_resume($scope0_id, "#text/3")}</span><button>Toggle</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0_show");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		checkedValue,
		$checkedValueChange
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		checkedValue: "2:6",
		$checkedValueChange: 0
	});
	_resume_branch($scope0_id);
}, 1);
