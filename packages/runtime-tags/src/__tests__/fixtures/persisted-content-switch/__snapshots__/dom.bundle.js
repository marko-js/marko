// tags/widget/index.marko
const $template = "<section><!></section>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $elseif_content2__input_inner = /*@__PURE__*/ _fill_join_closure("a0", 6, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._._._.g), ($scope) => $scope._._._), 1);
const $widget_content2__if = /*@__PURE__*/ _if(0, "<b>A</b>", 0, 0, "<i>B:<!></i>", "Db%", $elseif_content2__input_inner);
const $widget_content2__input_inner = /*@__PURE__*/ _fill_join_closure("a0", 6, /*@__PURE__*/ _closure_get(9, ($scope) => $widget_content2__if($scope, $scope._._.g === "a" ? 0 : $scope._._.g === "b" ? 1 : 2), ($scope) => $scope._._), 0);
const $widget_content2 = /*@__PURE__*/ _content$1("a0", "<!><!><!>", "b%", $widget_content2__input_inner);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $widget_content2($scope));
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));
