// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_html = _serialize_guard($scope0_reason, 2), $sg__input_void = _serialize_guard($scope0_reason, 1), $sg__input_svg = _serialize_guard($scope0_reason, 3), $sg__input_camel = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.void, {}, 0, 0, $sg__input_void);
	_for_until(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.html, {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html("html");
		}, $scope1_id), 0, $sg__input_html);
		_serialize_if($scope0_reason, 2) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/1", $sg__input_html, 0, 0);
	_html("<svg>");
	_dynamic_tag($scope0_id, "#text/2", input.svg, {}, 0, 0, $sg__input_svg);
	_dynamic_tag($scope0_id, "#text/3", input.camel, {}, 0, 0, $sg__input_camel);
	_html("</svg>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
