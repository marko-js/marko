// tags/card.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const(4, $if_content__input_content);
var card_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
const $inputpCardspan_content__input_note = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a1");
const $inputpCardspan_content = _content("a0", "<em> </em>", "D ", $inputpCardspan_content__input_note);
_content_resume($inputpCardspan_content);
const $inputonCarddiv_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputpCardspan_content);
const $inputonCarddiv_content__input_p = /*@__PURE__*/ _closure_get(6, ($scope) => $inputonCarddiv_content__dynamicTag($scope, $scope._.e ? card_default : "span"), 0, "a3");
const $inputonCarddiv_content = _content("a2", "<!><!><!>", "b%", $inputonCarddiv_content__input_p);
_content_resume($inputonCarddiv_content);
