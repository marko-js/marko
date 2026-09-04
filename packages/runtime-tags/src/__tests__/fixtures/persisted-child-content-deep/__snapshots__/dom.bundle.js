// tags/card/index.marko
const $template$1 = "<section class=card><!></section>";
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content(0);

// tags/box/index.marko
const $template = "<div class=box><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $card_content__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, "t:" + $scope._._._.e), ($scope) => $scope._._._), 0);
const $card_content = /*@__PURE__*/ _content$1("a0", "<p> </p>", "D ", $card_content__input_title);
const $box_content__setup = ($scope) => $input_content_direct$1($scope.a, $card_content($scope));
const $box_content = /*@__PURE__*/ _content$1("a1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $box_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $box_content($scope));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
