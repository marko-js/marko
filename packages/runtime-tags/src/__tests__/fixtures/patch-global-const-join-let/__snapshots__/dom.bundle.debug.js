// template.marko
const $template = "<button>toggle</button><!><!><!><p> </p>";
const $walks = " b%b%b%bD l";
const $if = /*@__PURE__*/ _if("#text/1", "<b>shown</b>");
const $on__OR__flag = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_on#5_flag#6/setup", 7, ($scope) => $if($scope, $scope.flag && $scope.on ? 0 : 1));
const $if2 = /*@__PURE__*/ _if("#text/2", "<i>chained</i>");
const $on__OR__off = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_on#5_off#8/setup", 9, ($scope) => $if2($scope, !$scope.off && $scope.on ? 0 : 1));
const $if3 = /*@__PURE__*/ _if("#text/3", "<u>whole</u>");
const $on__OR__g_flag = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_on#5_g_flag#15/setup", 16, ($scope) => $if3($scope, $scope.g_flag && $scope.on ? 0 : 1));
const $on__OR__user_name = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_on#5_user_name#12/setup", 13, ($scope) => _text($scope["#text/4"], $scope.on ? $scope.user_name : "-"));
const $on = _let("on/5", ($scope) => {
	$on__OR__flag($scope);
	$on__OR__off($scope);
	$on__OR__g_flag($scope);
	$on__OR__user_name($scope);
});
const $off = /*@__PURE__*/ _const("off", $on__OR__off);
const $flag = /*@__PURE__*/ _const("flag", ($scope) => {
	$off($scope, !$scope.flag);
	$on__OR__flag($scope);
});
const $setup__$global_flag = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_flag#6", ($scope) => $flag($scope, $scope.$global.flag), "flag");
const $pattern2 = ($scope, $pattern) => $user_name($scope, $pattern.user?.name);
const $g = ($scope, g) => $g_flag($scope, g?.flag);
const $setup__$global = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global#5", ($scope) => {
	$pattern2($scope, $scope.$global);
	$g($scope, $scope.$global);
}, "");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__$global_flag($scope);
	$setup__$global($scope);
	$setup__script($scope);
}
const $user_name = /*@__PURE__*/ _const("user_name", $on__OR__user_name);
const $g_flag = /*@__PURE__*/ _const("g_flag", $on__OR__g_flag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
