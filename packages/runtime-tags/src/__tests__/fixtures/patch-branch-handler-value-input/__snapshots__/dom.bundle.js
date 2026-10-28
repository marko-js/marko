// template.marko
const $if_content__input_mode__script = _script("a0", ($scope) => _on($scope.a, "click", $scope._.f === "a" ? function() {
	$out($scope._, "A");
} : function() {
	$out($scope._, "B");
}));
const $if_content__input_mode = /*@__PURE__*/ _fill_join("a2", 5, /*@__PURE__*/ _if_closure(1, 0, $if_content__input_mode__script));
const $if = /*@__PURE__*/ _if(1, "<button class=go>go</button>", " ", $if_content__input_mode);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $out = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
