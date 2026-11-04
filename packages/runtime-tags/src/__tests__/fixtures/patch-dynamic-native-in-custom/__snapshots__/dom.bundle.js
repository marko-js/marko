// card.marko
const $input_meta = ($scope, input_meta) => _text($scope.a, input_meta ? input_meta.n : "-");

// template.marko
const $inputonpdiv_content__input_label = /*@__PURE__*/ _closure_get_patch("c1", 8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "c7", 0);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("c0", " ", " ", $inputonpdiv_content__input_label));
const $Card_content__input_on__OR__count = /*@__PURE__*/ _or_patch("c2", 1, ($scope) => $Card_content__dynamicTag($scope, $scope._.e ? "p" : "div", ($_) => ({ "data-n": $scope._.g })));
const $Card_content__count = /*@__PURE__*/ _closure_get(9, $Card_content__input_on__OR__count, 0, "c4");
const $count__closure = /*@__PURE__*/ _closure($Card_content__count);
const $count = _let(6, ($scope) => {
	$input_meta($scope.a, attrTag({ n: $scope.g }));
	$count__closure($scope);
});
const $setup__script = _script("c6", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
