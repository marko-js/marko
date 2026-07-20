// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_to = _serialize_guard($scope0_reason, 0), $si__input_to = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}</li>`);
		$si__input_to && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_to, $sg__input_to, $sg__input_to, 0, 1);
	$si__input_to && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
