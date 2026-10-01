// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_children = _write_guard($scope0_reason, 0), $wi__input_children = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { children } = input;
	_html("<div>");
	_for_of(children, (child) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", child.text, $wg__input_children));
		$wi__input_children && _scope($scope1_id, {});
	}, function(c) {
		return c.id;
	}, $scope0_id, "a", $wg__input_children, $wg__input_children, $wg__input_children, "</div>");
	$wi__input_children && _scope($scope0_id, {});
}, 1);
