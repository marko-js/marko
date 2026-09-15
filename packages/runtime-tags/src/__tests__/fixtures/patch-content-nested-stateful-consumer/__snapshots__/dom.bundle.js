// tags/grand/index.marko
const $template = "<div><!></div>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/card/index.marko
const $if_content__input_content = /*@__PURE__*/ _fill_join("b0", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.g)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b1", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));

// template.marko
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e)), 0);
const $card_content = _content_resume("a0", "<em> </em>", "D ", $card_content__input_note);
