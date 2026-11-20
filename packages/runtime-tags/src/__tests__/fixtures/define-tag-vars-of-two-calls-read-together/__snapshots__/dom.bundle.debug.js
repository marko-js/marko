// template.marko
const $Child_content__walks = " b";
const $Child_content__template = "<button>t</button>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<p> </p>`)($Child_content__template, $Child_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}&D l`)($Child_content__walks, $Child_content__walks);
const $Child_content__x = /*@__PURE__*/ _let("x/1", ($scope) => _return($scope, $scope.x ? "on" : "off"));
const $Child_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Child_content__x($scope, !$scope.x);
}));
const $Child_content__setup = ($scope) => {
	$Child_content__x($scope, false);
	$Child_content__setup__script($scope);
};
const $v__OR__w = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/4"], $scope.v + $scope.w), 1, "#scopeOffset/3");
const $v = _var_resume("__tests__/template.marko_0_v#5/var", /*@__PURE__*/ _const("v", $v__OR__w));
function $setup($scope) {
	$Child_content__setup($scope["#childScope/0"]);
	$Child_content__setup($scope["#childScope/2"]);
	_var($scope, "#childScope/0", $v);
	_var($scope, "#childScope/2", $w);
}
const $w = _var_resume("__tests__/template.marko_0_w#6/var", /*@__PURE__*/ _const("w", $v__OR__w));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
