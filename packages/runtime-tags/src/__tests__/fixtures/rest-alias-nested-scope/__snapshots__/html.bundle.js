// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value_foo = _serialize_guard($scope0_reason, 1), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	const { foo: $foo, ...rest } = value || {};
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			const { foo } = value;
			_html(` -- ${_sep($sg__input_value_foo)}${_escape(foo)}${_el_resume($scope1_id, "a", $sg__input_value_foo)}<span`);
			_attrs_content(rest, "b", $scope1_id, "span");
			_html(`</span>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $sg__input_value, $sg__input_value, $sg__input_value, void 0, void 0, 1);
	writeScope($scope0_id, { e: _serialize_if($scope0_reason, 0) && value?.foo });
}, 1);
