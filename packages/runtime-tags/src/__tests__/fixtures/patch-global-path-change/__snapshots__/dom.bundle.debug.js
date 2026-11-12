// template.marko
const $template = "<button>t</button><!><div></div>";
const $walks = " b%b b";
const $global_o_key = /*@__PURE__*/ _global_key("o", "x");
const $if_content__$global_o = /*@__PURE__*/ _global_if($global_o_key, "#text/1", 0, "__tests__/template.marko_1_$global_o#0:7/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.o.x));
const $if_content__setup = $if_content__$global_o;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = _let("open/3", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $global_o_x = /*@__PURE__*/ _global_closure($global_o_key);
const $global_k_key = /*@__PURE__*/ _global_key("k");
const $global_k = /*@__PURE__*/ _global_closure($global_k_key);
const $global_o_x__OR__$global_k = _global_script("__tests__/template.marko_0_$global_o_x#8_$global_k#10", ($scope) => _el_read($scope["#div/2"]).textContent = $scope.$global.o.x + $scope.$global.k, $global_o_x, $global_k);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$global_o_x__OR__$global_k($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
