// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $setup__$global_o_x__script = _fill_global_path_script("__tests__/template.marko_0_$global_o_x#7", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x), "o", "x");
const $setup__$global_o_x = $setup__$global_o_x__script;
const $setup__$global_o__script = _fill_global_script("__tests__/template.marko_0_$global_o#6", ($scope) => _el_read($scope["#div/1"]).textContent = JSON.stringify($scope.$global.o), "o");
const $setup__$global_o = $setup__$global_o__script;
const $setup__$global_o__OR__$global_o_x__script = _fill_global_script("__tests__/template.marko_0_$global_o#6_$global_o_x#7", ($scope) => _el_read($scope["#div/2"]).textContent = $scope.$global.o.x + JSON.stringify($scope.$global.o), "o");
const $setup__$global_o__OR__$global_o_x = $setup__$global_o__OR__$global_o_x__script;
function $setup($scope) {
	$setup__$global_o_x($scope);
	$setup__$global_o($scope);
	$setup__$global_o__OR__$global_o_x($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
