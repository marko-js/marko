// tags/box/index.marko
const $template$1 = "<div class=box><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box/index.marko", $template$1, "D%l", $setup$1, $input$1);

// template.marko
const $template = "<main><!><button class=toggle>+</button><button class=bump> </button></main>";
const $walks = "D%b b D m";
const $box_content__input_a__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.count + ":" + $scope._._.input_a));
const $box_content__input_a = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_a", /*@__PURE__*/ _closure_get("input_a", $box_content__input_a__OR__count, ($scope) => $scope._._), 0);
const $box_content__setup = ($scope) => {
	$box_content__input_a($scope);
	$box_content__count($scope);
};
const $box_content__count = /*@__PURE__*/ _closure_get("count", $box_content__input_a__OR__count, ($scope) => $scope._._);
const $box_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $box_content__setup);
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $box_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $count__closure = /*@__PURE__*/ _closure($box_content__count);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$open($scope, !$scope.open);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$open($scope, false);
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a__closure = /*@__PURE__*/ _closure($box_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
