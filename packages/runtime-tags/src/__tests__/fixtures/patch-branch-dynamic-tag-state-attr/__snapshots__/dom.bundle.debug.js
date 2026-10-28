// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $inputonpdiv_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "x");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonpdiv_content);
const $if_content__input_on__OR__count = /*@__PURE__*/ _fill_if("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_on#0:5_count#0:6/init", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_on ? "p" : "div", ($_) => ({ "data-n": $scope._.count }))), "#text/0", 0);
const $if_content__input_on = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_on__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_on__OR__count);
const $count = _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_on($scope, input.on);
};
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_on", $if_content__input_on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
