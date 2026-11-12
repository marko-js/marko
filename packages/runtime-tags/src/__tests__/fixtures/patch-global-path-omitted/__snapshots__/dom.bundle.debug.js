// template.marko
const $template = "<div></div><p> </p>";
const $walks = " bD l";
const $global_o_x_key = /*@__PURE__*/ _global_key("o", "x");
const $global_o_x = /*@__PURE__*/ _global_closure($global_o_x_key);
const $global_o_x__script = _global_script("__tests__/template.marko_0_$global_o_x#5", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x), $global_o_x);
const $global_k_key = /*@__PURE__*/ _global_key("k");
const $global_k = /*@__PURE__*/ _global_closure($global_k_key, "__tests__/template.marko_0_$global_k#7/subscribe", ($scope) => _text($scope["#text/1"], $scope.$global.k));
function $setup($scope) {
	$global_o_x__script($scope);
	$global_k($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
