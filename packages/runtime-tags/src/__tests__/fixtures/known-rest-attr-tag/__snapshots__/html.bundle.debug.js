// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_button = _serialize_guard($scope0_reason, 0), $si__input_button = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { button: buttons, ...htmlInput } = input;
	_html(`<div${_attrs(htmlInput, "#div/0", $scope0_id, "div")}>`);
	_for_of(buttons, (button) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (button) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", button, {}, 0, 0, $sg__input_button);
				$si__input_button && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "4:8");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_button, $sg__input_button, $sg__input_button, void 0, void 0, 1);
		$si__input_button && writeScope($scope1_id, { button }, "__tests__/tags/child.marko", "3:4", { button: "3:8" });
	}, 0, $scope0_id, "#div/0", $sg__input_button, 1, $sg__input_button, "</div>", 0, 1);
	_script($scope0_id, "__tests__/tags/child.marko_0_htmlInput");
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ button: attrTag({
		onClick: _resume(function() {}, "__tests__/template.marko_0/onClick"),
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("one");
		})
	}) });
}, 1);
