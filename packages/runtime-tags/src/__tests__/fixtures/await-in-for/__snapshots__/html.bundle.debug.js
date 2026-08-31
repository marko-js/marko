// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_await($scope1_id, "#text/0", resolveAfter(item.label, 1), (v) => {
			const $scope2_id = _scope_id();
			_html(`${_escape(v) || _sep($sg__input_items)}${_el_resume($scope2_id, "#text/0", $sg__input_items)}`);
			$si__input_items && writeScope($scope2_id, {}, "__tests__/template.marko", "6:8");
		}, $sg__input_items);
		_html("</li>");
		$si__input_items && writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#ul/0", $sg__input_items, $sg__input_items, $sg__input_items, "</ul>", 1);
	$si__input_items && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
