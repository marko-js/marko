// template.marko
const $D_content__walks = "%b";
const $D_content__template = "<!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__v__OR__i = /*@__PURE__*/ _or(3, ($scope) => $D_content__q($scope["#childScope/0"], $scope._.v + $scope.i));
const $for_content__v = /*@__PURE__*/ _for_closure("#text/0", $for_content__v__OR__i, 6);
const $for_content__setup = ($scope) => {
	$for_content__v._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$D_content__setup($scope["#childScope/0"]);
};
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__v__OR__i);
const $for_content__$params = ($scope, $params3) => $for_content__i($scope, $params3[0]);
const $D_content__input_p1__OR__q = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope._.input_p1 + $scope.q));
const $D_content__input_p = /*@__PURE__*/ _closure_get("input_p1/5", $D_content__input_p1__OR__q, 0, "__tests__/template.marko_1_input_p1#0:3/subscribe");
const $D_content__setup = $D_content__input_p;
const $D_content__q = /*@__PURE__*/ _const("q", $D_content__input_p1__OR__q);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__q($scope, $temp.q);
const $v = /*@__PURE__*/ _let("v/4", $for_content__v);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", $D_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($D_content__walks), $for_content__setup, $for_content__$params);
function $setup($scope) {
	$v($scope, 0);
	$for($scope, [[1, 2]]);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
