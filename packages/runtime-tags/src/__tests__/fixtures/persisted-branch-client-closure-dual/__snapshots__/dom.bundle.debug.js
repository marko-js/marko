// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content3__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "s:" + $scope._._.input_title), ($scope) => $scope._._), 1);
const $if_content3__setup = $if_content3__input_title;
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "p:" + $scope._._.input_title), ($scope) => $scope._._), 0);
const $if_content2__setup = $if_content2__input_title;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__if2 = /*@__PURE__*/ _if("#text/1", "<span> </span>", "D ", $if_content3__setup);
const $if_content__b = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__if($scope, $scope._.b ? 0 : 1);
	$if_content__if2($scope, $scope._.b ? 0 : 1);
});
const $if_content__setup = $if_content__b;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!><!>", "b%b%", $if_content__setup);
const $a = /*@__PURE__*/ _let("a/5", ($scope) => $if($scope, $scope.a ? 0 : 1));
const $b = /*@__PURE__*/ _let("b/6", $if_content__b);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$a($scope, !$scope.a);
	$b($scope, !$scope.b);
}));
function $setup($scope) {
	$a($scope, false);
	$b($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($if_content2__input_title, $if_content3__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
