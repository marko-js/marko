// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_html = _serialize_guard($scope0_reason, 2), $sg__input_void = _serialize_guard($scope0_reason, 1), $sg__input_svg = _serialize_guard($scope0_reason, 3), $sg__input_camel = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.void, {}, 0, 0, $sg__input_void);
	_for_until(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.html, {}, _content_resume("a0", () => {
			_scope_id();
			_scope_reason();
			_html("html");
		}, $scope1_id), 0, $sg__input_html);
		_serialize_if($scope0_reason, 2) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", $sg__input_html, 0, 0);
	_html("<svg>");
	_dynamic_tag($scope0_id, "c", input.svg, {}, 0, 0, $sg__input_svg);
	_dynamic_tag($scope0_id, "d", input.camel, {}, 0, 0, $sg__input_camel);
	_html("</svg>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
