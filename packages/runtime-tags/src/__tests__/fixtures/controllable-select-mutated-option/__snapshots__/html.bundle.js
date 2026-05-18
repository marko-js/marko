// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let options = [
		1,
		2,
		3
	];
	let value = options[0];
	_attr_select_value($scope0_id, "a", value, _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id), () => {
		_html("<form><select>");
		_for_of(options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt)}>${_escape(opt)}${_el_resume($scope1_id, "b")}</option>${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, {});
		}, (v) => v, $scope0_id, "a", 1, 1, 1, "</select>", 1);
	});
	_html(`<button type=reset>reset</button></form><div>${_escape(value)}${_el_resume($scope0_id, "b")}</div><button class=remove>Remove option</button>${_el_resume($scope0_id, "c")}<button class=add>Add option</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, { e: options });
	_resume_branch($scope0_id);
}, 1);
