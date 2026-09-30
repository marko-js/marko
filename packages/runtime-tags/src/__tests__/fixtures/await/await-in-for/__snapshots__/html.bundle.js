// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_await($scope1_id, "a", resolveAfter(item.label, 1), (v) => {
			const $scope2_id = _scope_id();
			_html(_text_resume($scope2_id, "a", v, $sg__input_items));
			$si__input_items && _scope($scope2_id, {});
		}, $sg__input_items);
		_html("</li>");
		$si__input_items && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_items, $sg__input_items, $sg__input_items, "</ul>", 1);
	$si__input_items && _scope($scope0_id, {});
}, 1);
