// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input_suffix__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_suffix#0:6_count#0:7/setup", 1, ($scope) => _text($scope["#text/0"], $scope["#LoopKey"] + ":" + $scope._._.input_suffix + "@" + $scope._._.count));
const $for_content__input_suffix = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_suffix#0:6/subscribe", "input_suffix/9", $for_content__input_suffix__OR__count, ($scope) => $scope._._, "__tests__/template.marko_0_input_suffix#6/subscribers", 0);
const $for_content__setup = ($scope) => {
	$for_content__input_suffix($scope);
	$for_content__count($scope);
};
const $for_content__count = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_count#0:7/subscribe", "count/10", $for_content__input_suffix__OR__count, ($scope) => $scope._._);
const $if_content__for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup);
const $if_content__input_items = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_items#0:5/setup", "#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.input_items, (item) => item]));
const $if_content__setup = $if_content__input_items;
const $count__closure = /*@__PURE__*/ _closure($for_content__count);
const $count = _let("count/7", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_suffix($scope, input.suffix);
	$input_show($scope, input.show);
};
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
const $input_suffix__closure = /*@__PURE__*/ _closure($for_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
