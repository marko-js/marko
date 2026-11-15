// tags/child.marko
const $Rec_content__walks = "D l%c";
const $Rec_content__template = "<span> </span><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Rec_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Rec_content__walks);
const $if_content__input_x__OR__a = /*@__PURE__*/ _or(1, ($scope) => $Rec_content__a($scope["#childScope/0"], $scope._.a || $scope._._.input_x));
const $if_content__input_x = /*@__PURE__*/ _closure_get("input_x/4", $if_content__input_x__OR__a, ($scope) => $scope._._, "__tests__/tags/child.marko_2_input_x#0:3/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_x($scope);
	$if_content__a._($scope);
	$if_content__depth._($scope);
	$scope["#childScope/0"]._ = $scope._._;
};
const $if_content__a = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_x__OR__a);
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Rec_content__tag_input_depth($scope["#childScope/0"], $scope._.depth - 1));
const $Rec_content__a = /*@__PURE__*/ _const("a", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	$if_content__a($scope);
});
const $Rec_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Rec_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Rec_content__walks), $if_content__setup);
const $Rec_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$Rec_content__if($scope, $scope.depth ? 0 : 1);
	$if_content__depth($scope);
});
const $Rec_content__$params = ($scope, $params2) => $Rec_content__$temp($scope, $params2[0]);
const $Rec_content__$temp = ($scope, $temp) => {
	$Rec_content__a($scope, $temp.a);
	$Rec_content__tag_input_depth($scope, $temp.depth);
};
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Rec_content__a($scope["#childScope/0"], 0);
	$Rec_content__tag_input_depth($scope["#childScope/0"], 1);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($if_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $x = /*@__PURE__*/ _let("x/2", ($scope) => $input_x($scope["#childScope/0"], $scope.x));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
