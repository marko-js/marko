// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $global_o_x__script = _script("__tests__/template.marko_0_$global_o_x#7", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x));
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#7/subscribe", $global_o_x__script, "o", "x");
const $global_o__script = _script("__tests__/template.marko_0_$global_o#6", ($scope) => {
	_el_read($scope["#div/1"]).textContent = JSON.stringify($scope.$global.o);
	_el_read($scope["#div/2"]).textContent = $scope.$global.o.x + JSON.stringify($scope.$global.o);
});
const $global_o = _fill_global_resume("__tests__/template.marko_0_$global_o#6/subscribe", $global_o__script, "o");
function $setup($scope) {
	$global_o_x($scope);
	$global_o($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
