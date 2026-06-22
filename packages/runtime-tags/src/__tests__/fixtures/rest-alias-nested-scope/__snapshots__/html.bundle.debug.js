// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value_foo = _serialize_guard($scope0_reason, 1), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	const { foo: $foo, ...rest } = value || {};
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			const { foo } = value;
			_html(` -- ${_sep($sg__input_value_foo)}${_escape(foo)}${_el_resume($scope1_id, "#text/0", $sg__input_value_foo)}<span`);
			_attrs_content(rest, "#span/1", $scope1_id, "span");
			_html(`</span>${_el_resume($scope1_id, "#span/1")}`);
			_script($scope1_id, "__tests__/template.marko_1_rest");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_value, $sg__input_value, $sg__input_value, void 0, void 0, 1);
	writeScope($scope0_id, { foo: _serialize_if($scope0_reason, 0) && value?.foo }, "__tests__/template.marko", 0, { foo: "4:12" });
}, 1);
