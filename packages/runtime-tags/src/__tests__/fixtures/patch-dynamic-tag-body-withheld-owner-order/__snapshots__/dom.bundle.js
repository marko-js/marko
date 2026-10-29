// tags/keeper.marko
const $template$1 = "<button class=toggle>t</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("b1", 4, $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, $setup, $input$1);

// tags/plain.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("c", $template, "b%c", 0, $input);

// template.marko
const $X_content__label = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a4", 4, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.e), 0, "a2"), 0));
const $X_content = _content$1("a0", "<em> </em>", "D ", $X_content__label);
const $D_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1);
const $D_content__input_on__OR__prev = /*@__PURE__*/ _or_resume("a5", 6, ($scope) => $D_content__dynamicTag2($scope, $scope._.f ? keeper_default : plain_default, ($_) => ({ content: $scope.f })));
const $D_content__prev = /*@__PURE__*/ _const(5, $D_content__input_on__OR__prev);
const $first = _var_resume("a7", ($scope, first) => $D_content__prev($scope.c, first));
