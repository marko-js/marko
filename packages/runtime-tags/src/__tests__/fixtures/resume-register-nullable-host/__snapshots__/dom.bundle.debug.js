// tags/card.marko
const $template$1 = "<div class=card><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $showCardnull_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_1_count#3/subscribe");
const $showCardnull_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $showCardnull_content__setup = ($scope) => {
	$showCardnull_content__count($scope);
	$showCardnull_content__setup__script($scope);
};
const $showCardnull_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button id=inc> </button>", " D ", $showCardnull_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $showCardnull_content);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $dynamicTag($scope, $scope.show ? card_default : null));
const $count__closure = /*@__PURE__*/ _closure($showCardnull_content__count);
const $count = /*@__PURE__*/ _let("count/3", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
