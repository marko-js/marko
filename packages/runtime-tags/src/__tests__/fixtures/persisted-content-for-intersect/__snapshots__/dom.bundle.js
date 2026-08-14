// tags/box/index.marko
const $template = "<div class=box><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $for_content__input_title__OR__item = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._._._.e + ":" + $scope.c));
const $for_content__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, $for_content__input_title__OR__item, ($scope) => $scope._._._), 0);
const $for_content__setup = $for_content__input_title;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_title__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $box_content__for = /*@__PURE__*/ _for_of(0, "<span> </span>", "D ", $for_content__setup, $for_content__$params);
const $box_content__setup = ($scope) => $box_content__for($scope, [["p", "q"]]);
const $box_content = /*@__PURE__*/ _content("a0", "<!><!><!>", "b%", $box_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $box_content($scope));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
