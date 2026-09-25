// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/box.marko
const $inputasdiv_content = /*@__PURE__*/ _content("b0", "box body");

// tags/v:box.marko.register-$inputasdiv_content.js
_resumed.b0 = $inputasdiv_content;

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
