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

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_p__OR__c = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.e ? keeper_default : "div", ($_) => ({ content: $scope.f }))));
const $c = fill("b1", /*@__PURE__*/ _let(5, $input_p__OR__c));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a5", 6, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.g), 0, "a2"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
