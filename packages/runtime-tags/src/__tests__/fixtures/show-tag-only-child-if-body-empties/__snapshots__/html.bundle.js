// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_on = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>");
	const $show = input.on;
	_show_start($show, $wg__input_on, $wg__input_on, "</p>");
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			$wi__input_on && _scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("hello");
			$wi__input_on && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", $wg__input_on, $wg__input_on);
	_show_end($scope0_id, "a", $show, $wg__input_on, $wg__input_on, "</p>");
	$wi__input_on && _scope($scope0_id, {});
}, 1);
