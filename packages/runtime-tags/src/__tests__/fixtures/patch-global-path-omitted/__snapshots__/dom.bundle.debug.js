// template.marko
const $template = "<div></div><p> </p>";
const $walks = " bD l";
const $setup__$global_o_x__script = _fill_global_path_script("__tests__/template.marko_0_$global_o_x#5", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x), "o", "x");
const $setup__$global_o_x = $setup__$global_o_x__script;
const $setup__$global_k = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_k#7", ($scope) => _text($scope["#text/1"], $scope.$global.k), "k");
function $setup($scope) {
	$setup__$global_o_x($scope);
	$setup__$global_k($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
