// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__body = /*@__PURE__*/ _fill_join("a4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__body);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $body_content2__input_title = /*@__PURE__*/ _fill_join_closure("a8", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.f), 0, "a6"), 1);
const $body_content2 = _content$1("a0", "<strong> </strong>", "D ", $body_content2__input_title);
const $body_content__input_title = /*@__PURE__*/ _fill_join_closure("a8", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.f), 0, "a5"), 0);
const $body_content = _content$1("a1", "<em> </em>", "D ", $body_content__input_title);
const $count = /*@__PURE__*/ _fill_let("a9", 7, ($scope) => $Panel_content__open($scope.a, $scope.h % 2 === 0));
const $setup__script = _script("a7", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
