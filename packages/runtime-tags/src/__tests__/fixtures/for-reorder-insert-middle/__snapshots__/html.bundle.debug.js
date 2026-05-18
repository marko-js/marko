// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_children = _serialize_guard($scope0_reason, 0), $si__input_children = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.children, (child) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attr("id", child.id)}>${_escape(child.text)}${_el_resume($scope1_id, "#text/1", $sg__input_children)}</span>${_el_resume($scope1_id, "#span/0", $sg__input_children)}`);
		$si__input_children && writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, "id", $scope0_id, "#div/0", $sg__input_children, $sg__input_children, $sg__input_children, "</div>", 1);
	$si__input_children && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
