// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_children = _serialize_guard($scope0_reason, 0), $si__input_children = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_in(input.children, (key, text) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(key)}: ${_sep($sg__input_children)}${_escape(text)}${_el_resume($scope1_id, "b", $sg__input_children)}</p>`);
		$si__input_children && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_children, $sg__input_children, $sg__input_children, 0, 1);
	_for_in(input.children, (key) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_escape(key)}</p>`);
		$si__input_children && writeScope($scope2_id, {});
	}, 0, $scope0_id, "b", $sg__input_children, $sg__input_children, $sg__input_children, 0, 1);
	_html("</div>");
	$si__input_children && writeScope($scope0_id, {});
}, 1);
