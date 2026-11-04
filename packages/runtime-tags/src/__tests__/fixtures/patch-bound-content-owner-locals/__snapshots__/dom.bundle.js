// tags/host.marko
const $item_content__input_label = /*@__PURE__*/ _closure_get_patch("b0", 9, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._, "b4", 0);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content$1("b1", "<i><!>:<!></i>", "D%c%", $item_content__input_label), { 2: ($scope) => _text($scope.a, $scope.c) });
_content_closures_resume($item_content, 1);

// template.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params3) => $for_content__dynamicTag($scope, $params3[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__item = /*@__PURE__*/ _if_closure_patch("a1", 1, 0, ($scope) => $if_content__for($scope, [$scope._.e]));
const $wrap_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__item);
const $wrap_content__open = /*@__PURE__*/ _fill_let("a2", 5, ($scope) => $wrap_content__if($scope, $scope.f ? 0 : 1));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__open($scope, !$scope.f);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__setup__script($scope);
	$wrap_content__open($scope, true);
};
const $wrap_content__$params = ($scope, $params2) => $wrap_content__item($scope, $params2[0].item);
const $wrap_content__item = /*@__PURE__*/ _const(4, $if_content__item);
const $wrap_content = _content$1("a3", "<button class=toggle>toggle</button><!><!>", " b%", $wrap_content__setup, $wrap_content__$params);
