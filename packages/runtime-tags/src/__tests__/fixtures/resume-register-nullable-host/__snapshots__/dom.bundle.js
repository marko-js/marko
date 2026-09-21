// tags/card.marko
const $template = "<div class=card><!></div>";
const $walks = "D%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("b", $template, "D%l", 0, $input);

// template.marko
const $showCardnull_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.b, $scope._.d));
const $showCardnull_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.d + 1);
}));
const $showCardnull_content__setup = ($scope) => {
	$showCardnull_content__count($scope);
	$showCardnull_content__setup__script($scope);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, /* @__PURE__ */ _content("a0", "<button id=inc> </button>", " D ", $showCardnull_content__setup));
const $show = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c ? card_default : null));
const $count = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($showCardnull_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
