// template.marko
const $E_content__walks = "D%c%l";
const $E_content__template = "<span><!> <!></span>";
const $D_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($E_content__walks);
const $D_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($E_content__template);
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>t</button>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($D_content__walks);
const $for_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$E_content__setup($scope["#childScope/0"]);
};
const $E_content__n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_n#0:2/subscribe", "n/3", ($scope) => _text($scope["#text/1"], $scope._._.n), ($scope) => $scope._._);
const $E_content__setup = ($scope) => {
	$E_content__n($scope);
	$E_content__l($scope);
};
const $E_content__l = /*@__PURE__*/ _closure_get("l/6", ($scope) => _text($scope["#text/0"], $scope._.l), 0, "__tests__/template.marko_2_l#1:5/subscribe");
const $D_content__l__closure = /*@__PURE__*/ _closure($E_content__l);
const $D_content__l = /*@__PURE__*/ _const("l", $D_content__l__closure);
const $D_content__label = ($scope, label) => $D_content__l($scope, label + "!");
const $D_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/1", $E_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($E_content__walks), $for_content__setup);
const $D_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$E_content__setup($scope["#childScope/0"]);
	$D_content__for($scope, [[1, 2]]);
};
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__label($scope, $temp.label);
const $n__closure = /*@__PURE__*/ _closure($E_content__n);
const $n = _let("n/2", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$D_content__label($scope["#childScope/0"], "x");
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
