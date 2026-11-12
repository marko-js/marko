// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $global_o_x__script = _fill_global_path_script("__tests__/template.marko_0_$global_o_x#7", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x), "o", "x");
const $global_o_x = $global_o_x__script;
const $global_o__script = _fill_global_script("__tests__/template.marko_0_$global_o#6", ($scope) => {
	_el_read($scope["#div/1"]).textContent = JSON.stringify($scope.$global.o);
	_el_read($scope["#div/2"]).textContent = $scope.$global.o.x + JSON.stringify($scope.$global.o);
}, "o");
const $global_o = $global_o__script;
function $setup($scope) {
	$global_o_x($scope);
	$global_o($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
