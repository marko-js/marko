// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_users = _serialize_guard($scope0_reason, 0), $si__input_users = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.users, (user) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", user.name, $sg__input_users)} (${_text_resume($scope1_id, "b", user.role, $sg__input_users * 2)})</li>`);
		$si__input_users && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_users, $sg__input_users, $sg__input_users, "</ul>", 1);
	$si__input_users && writeScope($scope0_id, {});
}, 1);
