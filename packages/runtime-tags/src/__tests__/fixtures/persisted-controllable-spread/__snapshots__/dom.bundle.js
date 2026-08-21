// template.marko
const $text = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $field2__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $field = ($scope) => (next) => {
	$text($scope, next);
};
_resume("a0", $field);
