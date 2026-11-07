// template.marko
const $template = "<button>t</button><!><div></div>";
const $walks = " b%b b";
const $if_content__$global_o_x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_o_x#0:8/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], $scope.$global.o.x));
const $if_content__setup = $if_content__$global_o_x;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = _let("open/3", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $global_o_x__OR__$global_k__script = _script("__tests__/template.marko_0_$global_o_x#8_$global_k#10", ($scope) => _el_read($scope["#div/2"]).textContent = $scope.$global.o.x + $scope.$global.k);
const $global_o_x__OR__$global_k = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_$global_o_x#8_$global_k#10/setup", 4, $global_o_x__OR__$global_k__script);
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#8/subscribe", ($scope) => {
	$global_o_x__OR__$global_k($scope);
	$if_content__$global_o_x($scope);
}, "o", "x");
const $global_k = _fill_global_resume("__tests__/template.marko_0_$global_k#10/subscribe", $global_o_x__OR__$global_k, "k");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$global_o_x($scope);
	$global_k($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
