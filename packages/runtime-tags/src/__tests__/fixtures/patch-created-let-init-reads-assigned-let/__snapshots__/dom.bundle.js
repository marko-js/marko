// tags/card.marko
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $c$1 = _let(7, ($scope) => $dynamicTag$1($scope, $scope.h));
const $input_content__OR__open$1 = /*@__PURE__*/ _or_patch("b1", 6, ($scope) => $c$1($scope, $scope.f ? $scope.e : void 0));
const $open$1 = /*@__PURE__*/ _fill_let("b2", 5, $input_content__OR__open$1);
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c$1($scope, void 0);
	$open$1($scope, !$scope.f);
}));

// tags/relay.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(8, ($scope) => $dynamicTag($scope, $scope.i));
const $picked = _let(7, ($scope) => $c($scope, $scope.h));
const $input_content__OR__open = /*@__PURE__*/ _or_patch("c1", 6, ($scope) => $picked($scope, $scope.f ? $scope.e : void 0));
const $open = /*@__PURE__*/ _fill_let("c2", 5, $input_content__OR__open);
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $relay_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a5", 1);
const $relay_content = _content$1("a3", "<em>relayed <!></em>", "Db%", $relay_content__input_label);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a5", 0);
const $card_content = _content$1("a1", "<em>static <!></em>", "Db%", $card_content__input_label);
