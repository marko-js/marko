// tags/reader.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.onRead($scope.c.read());
}));
const $input = /*@__PURE__*/ _const(2);

// template.marko
const $wrapper_content__label = /*@__PURE__*/ _const(1, ($scope) => $input($scope.a, {
	read: $read($scope),
	onRead: $onRead($scope)
}));
const $wrapper_content__input_label = _closure_resume("a6", /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $wrapper_content__label($scope, $scope._.e)), 0));
const $shown = /*@__PURE__*/ _fill_let("a4", 5, ($scope) => _text($scope.b, $scope.f));
const $onRead = ($scope) => function(value) {
	$shown($scope._, value);
};
const $read = ($scope) => () => $scope.b;
_resumed.a1 = $onRead;
_resumed.a0 = $read;
