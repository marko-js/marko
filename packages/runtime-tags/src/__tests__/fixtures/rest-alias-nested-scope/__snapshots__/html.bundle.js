// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { value } = input;
	const { foo: $foo, ...rest } = value || {};
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			const { foo } = value;
			_html(` -- ${_text_resume($scope1_id, "a", foo, _write_guard($scope0_reason, 2) * 2)}<span`);
			_attrs_content(rest, "b", $scope1_id, "span");
			_html(`</span>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_value, $wg__input_value);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		e: value?.foo,
		f: rest
	});
}, 1);
