// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content2__input_inner = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_inner", /*@__PURE__*/ _closure_get("input_inner", ($scope) => _text($scope["#text/0"], $scope._._.input_inner), ($scope) => $scope._._), 0);
const $if_content2__setup = $if_content2__input_inner;
const $if_content__input_outer = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_outer", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_outer)));
const $if_content__setup = ($scope) => {
	$if_content__input_outer._($scope);
	$if_content__on._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content2__setup);
const $if_content__on = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.on ? 0 : 1));
const $if = /*@__PURE__*/ _if("#text/0", "<h2> </h2><!><!>", "D l%", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $on = /*@__PURE__*/ _let("on/7", $if_content__on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$count($scope, 0);
	$on($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_inner($scope, input.inner);
};
const $input_outer = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_outer", $if_content__input_outer);
const $input_inner__closure = /*@__PURE__*/ _closure($if_content2__input_inner);
const $input_inner = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
