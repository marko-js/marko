// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__$global_o_x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_o_x#0:8/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], $scope.$global.o.x.toUpperCase()));
const $if_content__setup = ($scope) => {
	$if_content__$global_o_x._($scope);
	$if_content__$global_o_list_length._($scope);
	$if_content__$global_o_a_b._($scope);
	$if_content__$global_c_d._($scope);
	$if_content__$global_p_x._($scope);
};
const $if_content__$global_o_list_length = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_o_list_length#0:11/setup", "#text/1", 0, ($scope) => _text($scope["#text/1"], $scope.$global.o.list.length));
const $if_content__$global_o_a_b = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_o_a_b#0:13/setup", "#text/1", 0, ($scope) => _text($scope["#text/2"], $scope.$global.o["a.b"]));
const $if_content__$global_c_d = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_c_d#0:15/setup", "#text/1", 0, ($scope) => _text($scope["#text/3"], $scope.$global["c.d"]));
const $if_content__$global_p_x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_p_x#0:18/setup", "#text/1", 0, ($scope) => _text($scope["#text/4"], $scope.$global.p?.x));
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p><b> </b><i> </i><u> </u><s> </s>", "D lD lD lD lD ", $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#8/subscribe", $if_content__$global_o_x, "o", "x");
const $global_o_list_length = _fill_global_path_resume("__tests__/template.marko_0_$global_o_list_length#11/subscribe", $if_content__$global_o_list_length, "o", "list", "length");
const $global_o_a_b = _fill_global_path_resume("__tests__/template.marko_0_$global_o_a_b#13/subscribe", $if_content__$global_o_a_b, "o", "a.b");
const $global_c_d = _fill_global_resume("__tests__/template.marko_0_$global_c_d#15/subscribe", $if_content__$global_c_d, "c.d");
const $global_p_x = _fill_global_path_resume("__tests__/template.marko_0_$global_p_x#18/subscribe", $if_content__$global_p_x, "p", "x");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$global_o_x($scope);
	$global_o_list_length($scope);
	$global_o_a_b($scope);
	$global_c_d($scope);
	$global_p_x($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
