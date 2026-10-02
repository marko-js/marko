// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_until = _write_guard($scope0_reason, 0), $wi__input_until = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_until(input.until, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}</li>`);
		$wi__input_until && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_until, $wg__input_until, 0, 0, 1);
	$wi__input_until && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
