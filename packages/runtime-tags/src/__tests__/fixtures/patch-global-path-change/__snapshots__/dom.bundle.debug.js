// template.marko
const $template = "<button>t</button><!><div></div>";
const $walks = " b%b b";
const $if_content__setup__$global_o = /*@__PURE__*/ _fill_global_path_join("__tests__/template.marko_1_$global_o#0:7", ($scope) => _text($scope["#text/0"], $scope.$global.o.x), "o", "x");
const $if_content__setup = $if_content__setup__$global_o;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = _let("open/3", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__$global_o_x__OR__$global_k__script = _fill_global_path_script("__tests__/template.marko_0_$global_o_x#8_$global_k#10", ($scope) => _el_read($scope["#div/2"]).textContent = $scope.$global.o.x + $scope.$global.k, "o", "x", 0, "k");
const $setup__$global_o_x__OR__$global_k = $setup__$global_o_x__OR__$global_k__script;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__$global_o_x__OR__$global_k($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
