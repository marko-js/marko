// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	_html("<div>");
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(value)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1, 1);
	_html(`<input${_attr_input_value($scope0_id, "#input/1", value, _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { value }, "__tests__/template.marko", 0, { value: "1:6" });
	_resume_branch($scope0_id);
}, 1);
