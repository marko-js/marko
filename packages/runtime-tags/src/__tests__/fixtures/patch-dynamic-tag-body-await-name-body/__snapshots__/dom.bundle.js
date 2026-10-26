// tags/card.marko
const $inputcontent_content = _content$1("b0", "<i>x</i>");

// tags/keeper.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("c2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("c1", 4, $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);

// template.marko
const $inputonKeeperdiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a6", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a2"), 0));
const $inputonKeeperdiv_content = _content$1("a0", "<em> </em>", "D ", $inputonKeeperdiv_content__input_note);
_content_resume($inputonKeeperdiv_content);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputonKeeperdiv_content);
const $Card_content__input_on = /*@__PURE__*/ _fill_join_closure("a5", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $Card_content__dynamicTag($scope, $scope._.e ? keeper_default : "div"), 0, "a3"), 0);
const $Card_content = _content$1("a4", "<!><!><!>", "b%", $Card_content__input_on);
