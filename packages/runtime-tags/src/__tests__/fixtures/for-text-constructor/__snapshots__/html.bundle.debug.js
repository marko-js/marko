// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_words = _serialize_guard($scope0_reason, 0), $si__input_words = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.words, (w) => {
		const $scope1_id = _scope_id();
		_html("constructor");
		$si__input_words && writeScope($scope1_id, {}, "__tests__/template.marko", "1:7");
	}, 0, $scope0_id, "#div/0", $sg__input_words, $sg__input_words, $sg__input_words, "</div>");
	$si__input_words && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
