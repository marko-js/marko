// template.marko
const $input_rest__OR__text__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $input_rest__OR__text = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => {
	_attrs($scope, "a", {
		value: $scope.f,
		valueChange: $valueChange($scope),
		...$scope.e
	}, _controllable_input);
	$input_rest__OR__text__script($scope);
}));
const $text = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$input_rest__OR__text($scope);
});
const $valueChange = ($scope) => (_new_text) => {
	$text($scope, _new_text);
};
_resume("a0", $valueChange);
