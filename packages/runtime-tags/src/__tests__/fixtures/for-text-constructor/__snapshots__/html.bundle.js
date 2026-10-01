// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_words = _write_guard($scope0_reason, 0), $wi__input_words = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.words, (w) => {
		const $scope1_id = _scope_id();
		_html("constructor");
		$wi__input_words && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_words, $wg__input_words, $wg__input_words, "</div>");
	$wi__input_words && _scope($scope0_id, {});
}, 1);
