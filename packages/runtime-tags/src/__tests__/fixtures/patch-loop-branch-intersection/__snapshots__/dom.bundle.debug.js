// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_suffix__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_suffix#0:6_count#0:7/setup", 1, ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"] + ":" + $scope._._.input_suffix + "@" + $scope._._.count));
const $if_content__input_suffix = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_suffix#0:6/subscribe", "input_suffix/9", $if_content__input_suffix__OR__count, ($scope) => $scope._._, "__tests__/template.marko_0_input_suffix#6/subscribers", 0);
const $if_content__setup = ($scope) => {
	$if_content__input_suffix($scope);
	$if_content__count($scope);
};
const $if_content__count = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_count#0:7/subscribe", "count/10", $if_content__input_suffix__OR__count, ($scope) => $scope._._);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $for_content__input_flag = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_flag#0:5/setup", "#text/0", ($scope) => $for_content__if($scope, $scope._.input_flag ? 0 : 1), 8);
const $for_content__setup = $for_content__input_flag;
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = _let("count/7", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_suffix($scope, input.suffix);
	$input_flag($scope, input.flag);
};
const $input_flag = /*@__PURE__*/ _const("input_flag", $for_content__input_flag);
const $input_suffix__closure = /*@__PURE__*/ _closure($if_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
