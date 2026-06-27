// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_users = _serialize_guard($scope0_reason, 0), $si__input_users = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.users, (user) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(user.name)}${_el_resume($scope1_id, "#text/0", $sg__input_users)} (${_sep($sg__input_users)}${_escape(user.role)}${_el_resume($scope1_id, "#text/1", $sg__input_users)})</li>`);
		$si__input_users && writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", $sg__input_users, $sg__input_users, $sg__input_users, "</ul>", 1);
	$si__input_users && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
