// template.marko
const $template = "<div></div><p> </p>";
const $walks = " bD l";
const $global_o_x__script = _script("__tests__/template.marko_0_$global_o_x#5", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x));
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#5/subscribe", $global_o_x__script, "o", "x");
const $global_k = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_k#7/subscribe", ($scope) => _text($scope["#text/1"], $scope.$global.k), "k");
function $setup($scope) {
	$global_o_x($scope);
	$global_k($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
