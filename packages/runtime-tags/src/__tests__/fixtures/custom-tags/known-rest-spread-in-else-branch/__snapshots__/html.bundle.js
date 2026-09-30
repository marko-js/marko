// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 2), $si__input_show = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { button } = input;
	const { a11yText: $a11yText2, ...rest } = button || {};
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html("<div></div>");
			$si__input_show && _scope($scope2_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			const { a11yText } = button;
			_html(`<div${_attr("aria-label", a11yText)}`);
			_attrs_partial_content(rest, { "aria-label": 1 }, "a", $scope1_id, "div");
			_html(`</div>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _serialize_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 1) || $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
	$si__input_show && _scope($scope0_id, {
		f: button?.a11yText,
		g: rest
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_serialize_reason($sg__input_show << 3 | $sg__input_show << 5);
	const $childScope = _peek_scope_id();
	child_default({
		show: input.show,
		button: {
			a11yText: "label",
			id: "kept"
		}
	});
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
