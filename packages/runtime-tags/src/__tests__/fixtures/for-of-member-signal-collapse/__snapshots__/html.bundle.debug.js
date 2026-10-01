// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_users = _write_guard($scope0_reason, 0), $wi__input_users = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.users, (user) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", user.name, $wg__input_users)} (${_text_resume($scope1_id, "#text/1", user.role, $wg__input_users * 2)})</li>`);
		$wi__input_users && _scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", $wg__input_users, $wg__input_users, $wg__input_users, "</ul>", 1);
	$wi__input_users && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
