// tags/heading.marko
const $inputtype_content__input_depth = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "c1", 4);
const $inputtype_content = _content("c0", "depth <!>", "b%", $inputtype_content__input_depth);
_content_resume($inputtype_content);
const $input_depth__closure = /*@__PURE__*/ _closure($inputtype_content__input_depth);
const $input_depth = /*@__PURE__*/ _const(4, $input_depth__closure);

// template.marko
const $depth = /*@__PURE__*/ _let(2, ($scope) => $input_depth($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$depth($scope, +$scope.c + 1);
}));

// tags/card.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const(4, $if_content__input_content);
var card_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
