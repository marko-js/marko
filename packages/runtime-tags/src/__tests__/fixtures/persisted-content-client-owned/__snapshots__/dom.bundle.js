// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(1);
const $input_title = ($scope, input_title) => _text($scope.a, input_title);

// template.marko
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("a1", 6, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._._.g), ($scope) => $scope._._), 0);
const $card_content = /*@__PURE__*/ _content$1("a0", "<em> </em>", "D ", $card_content__input_note);
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_title($scope.a, $scope._.f)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$input_content_direct($scope.a, $card_content($scope));
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.h);
}));
