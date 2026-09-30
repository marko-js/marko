// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_children = _write_guard($scope0_reason, 0), $wi__input_children = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_in(input.children, (key, text) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(key)}: ${_text_resume($scope1_id, "#text/1", text, $wg__input_children * 2)}</p>`);
		$wi__input_children && _scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#text/0", $wg__input_children, $wg__input_children, 0, 0, 1);
	_for_in(input.children, (key) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_escape(key)}</p>`);
		$wi__input_children && _scope($scope2_id, {}, "__tests__/template.marko", "5:4");
	}, 0, $scope0_id, "#text/1", $wg__input_children, $wg__input_children, 0, 0, 1);
	_html("</div>");
	$wi__input_children && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
