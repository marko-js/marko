// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input_suffix__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_3_input_suffix#0:7_count#0:8/setup", 1, ($scope) => _text($scope["#text/0"], $scope["#LoopKey"] + ":" + $scope._._._.input_suffix + "@" + $scope._._._.count));
const $for_content__input_suffix = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_suffix#0:7/subscribe", "input_suffix/11", $for_content__input_suffix__OR__count, ($scope) => $scope._._._, "__tests__/template.marko_0_input_suffix#7/subscribers", 0);
const $for_content__setup = ($scope) => {
	$for_content__input_suffix($scope);
	$for_content__count($scope);
};
const $for_content__count = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_count#0:8/subscribe", "count/12", $for_content__input_suffix__OR__count, ($scope) => $scope._._._);
const $if_content2__for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup);
const $if_content2__input_items = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_items#0:6/subscribe", "input_items/10", ($scope) => $if_content2__for($scope, [$scope._._.input_items, (item) => item]), ($scope) => $scope._._, "__tests__/template.marko_0_input_items#6/subscribers", 0);
const $if_content2__setup = $if_content2__input_items;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_inner#0:5/setup", "#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1));
const $if_content__setup = $if_content__input_inner;
const $count__closure = /*@__PURE__*/ _closure($for_content__count);
const $count = _let("count/8", $count__closure);
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
	$input_inner($scope, input.inner);
};
const $input_inner = /*@__PURE__*/ _const("input_inner", $if_content__input_inner);
const $input_items__closure = /*@__PURE__*/ _closure($if_content2__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
const $input_suffix__closure = /*@__PURE__*/ _closure($for_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
