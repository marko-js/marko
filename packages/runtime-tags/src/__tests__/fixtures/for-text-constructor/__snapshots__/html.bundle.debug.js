// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_words = _write_guard($scope0_reason, 0), $wi__input_words = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.words, (w) => {
		const $scope1_id = _scope_id();
		_html("constructor");
		$wi__input_words && _scope($scope1_id, {}, "__tests__/template.marko", "1:7");
	}, 0, $scope0_id, "#div/0", $wg__input_words, $wg__input_words, $wg__input_words, "</div>");
	$wi__input_words && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
