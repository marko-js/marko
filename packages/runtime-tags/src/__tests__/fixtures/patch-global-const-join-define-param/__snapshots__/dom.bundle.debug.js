// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($Show_content__walks);
const $Show_content__if = /*@__PURE__*/ _if("#text/0", "<b>shown</b>");
const $Show_content__v__OR__flag = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_v#3_flag#4/setup", 5, ($scope) => $Show_content__if($scope, $scope.flag && $scope.v ? 0 : 1));
const $Show_content__flag = /*@__PURE__*/ _const("flag", $Show_content__v__OR__flag);
const $global_flag_key = /*@__PURE__*/ _global_key("$global_flag/4", "flag");
const $Show_content__$global_flag = /*@__PURE__*/ _global_closure("__tests__/template.marko_1_$global_flag#0:10/subscribe", $global_flag_key, ($scope) => $Show_content__flag($scope, $scope.$global.flag));
const $Show_content__setup = $Show_content__$global_flag;
const $Show_content__v = /*@__PURE__*/ _const("v", $Show_content__v__OR__flag);
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => $Show_content__v($scope, $temp.v);
const $on = _let("on/2", ($scope) => $Show_content__v($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$Show_content__setup($scope["#childScope/1"]);
	$on($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
