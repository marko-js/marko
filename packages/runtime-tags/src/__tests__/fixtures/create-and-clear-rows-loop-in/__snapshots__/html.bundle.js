// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_children = _write_guard($scope0_reason, 0), $wi__input_children = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_in(input.children, (key, text) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(key)}: ${_text_resume($scope1_id, "b", text, $wg__input_children * 2)}</p>`);
		$wi__input_children && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_children, $wg__input_children, 0, 0, 1);
	_for_in(input.children, (key) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_escape(key)}</p>`);
		$wi__input_children && _scope($scope2_id, {});
	}, 0, $scope0_id, "b", $wg__input_children, $wg__input_children, 0, 0, 1);
	_html("</div>");
	$wi__input_children && _scope($scope0_id, {});
}, 1);
