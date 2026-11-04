// tags/card.marko
const $Other_content__$params = ($scope, $params2) => _text($scope.a, $params2[0].n);
const $Other_content = _content("b0", "<b>other <!></b>", "Db%", 0, $Other_content__$params);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$c($scope, $scope.f);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => $dynamicTag($scope, $scope.g, ($_) => ({ n: 2 })));

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $Row_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => _text($scope.a, $scope._.e), 0, "a2", 0);
const $Row_content__setup = $Row_content__input_label;
const $Row_content__n = ($scope, n) => _text($scope.b, n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content("a0", $Row_content__template, $Row_content__walks, $Row_content__setup, $Row_content__$params);
