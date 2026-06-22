// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	_html("<div>");
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(value)}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1, 1);
	_html(`<input${_attr_input_value($scope0_id, "b", value, _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { f: value });
	_resume_branch($scope0_id);
}, 1);
