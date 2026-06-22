// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_children = _serialize_guard($scope0_reason, 0), $si__input_children = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.children, (child) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(child.text)}${_el_resume($scope1_id, "a", $sg__input_children)}`);
		$si__input_children && writeScope($scope1_id, {});
	}, function(c) {
		return c.id;
	}, $scope0_id, "a", $sg__input_children, $sg__input_children, $sg__input_children, 0, 1, 1);
	$si__input_children && writeScope($scope0_id, {});
}, 1);
