// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_button = _serialize_guard($scope0_reason, 0), $si__input_button = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { button: buttons, ...htmlInput } = input;
	_html(`<div${_attrs(htmlInput, "a", $scope0_id, "div")}>`);
	_for_of(buttons, (button) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (button) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", button, {}, 0, 0, $sg__input_button);
				$si__input_button && writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $sg__input_button, $sg__input_button, $sg__input_button);
		$si__input_button && writeScope($scope1_id, { c: button });
	}, 0, $scope0_id, "a", $sg__input_button, 1, $sg__input_button, "</div>");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { e: htmlInput });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ button: attrTag({
		onClick: _resume(function() {}, "a0"),
		content: _content_resume("a1", () => {
			_scope_reason();
			_scope_id();
			_html("one");
		}, $scope0_id)
	}) });
}, 1);
