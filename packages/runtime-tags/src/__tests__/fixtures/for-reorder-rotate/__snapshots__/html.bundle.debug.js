// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_children = _write_guard($scope0_reason, 0), $wi__input_children = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.children, (child) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attr("id", child.id)}>${_text_resume($scope1_id, "#text/1", child.text, $wg__input_children)}</span>`);
		$wi__input_children && _scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, "id", $scope0_id, "#div/0", $wg__input_children, $wg__input_children, $wg__input_children, "</div>", 1);
	$wi__input_children && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
