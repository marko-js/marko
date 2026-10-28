// template.marko
const $template = "<main><h1> </h1><!><button>+</button></main>";
const $walks = "E l%b l";
const $if_content2__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_count#0:8/init", /*@__PURE__*/ _closure_get("count/10", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#0:8/subscribe"));
const $if_content2__setup = $if_content2__count;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span>Seen <!></span>", "Db%", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_inner#0:7/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_inner", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1))));
const $if_content__setup = $if_content__input_inner;
const $count__closure = /*@__PURE__*/ _closure($if_content2__count);
const $count = _let("count/8", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p><!><!>", "b%", $if_content__setup);
const $input_outer = ($scope, input_outer) => $if($scope, input_outer ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_outer($scope, input.outer);
	$input_inner($scope, input.inner);
};
const $input_inner = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_inner", $if_content__input_inner);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
