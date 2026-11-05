// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $D_content__if = /*@__PURE__*/ _if("#text/0", "same", 0, 0, "different");
const $D_content__input_p1__OR__q = /*@__PURE__*/ _or(4, ($scope) => $D_content__if($scope, $scope._.input_p1 === $scope.q ? 0 : 1));
const $D_content__input_p = /*@__PURE__*/ _closure_get("input_p1/5", $D_content__input_p1__OR__q, 0, "__tests__/template.marko_1_input_p1#0:3/subscribe");
const $D_content__setup = $D_content__input_p;
const $D_content__q = /*@__PURE__*/ _const("q", $D_content__input_p1__OR__q);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__q($scope, $temp.q);
const $v = /*@__PURE__*/ _let("v/4", ($scope) => $D_content__q($scope["#childScope/0"], $scope.v));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$v($scope, 0);
}
const $input_p__closure = /*@__PURE__*/ _closure($D_content__input_p);
const $input_p__script = _script("__tests__/template.marko_0_input_p1#3", ($scope) => {
	console.log($scope.input_p1);
	$v($scope, 9);
});
const $input_p = /*@__PURE__*/ _const("input_p1", ($scope) => {
	$input_p__closure($scope);
	$input_p__script($scope);
});
const $input = ($scope, input) => $input_p($scope, input.p1);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
