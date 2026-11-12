// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $global_o_x_key = /*@__PURE__*/ _global_key("o", "x");
const $global_o_x = /*@__PURE__*/ _global_closure($global_o_x_key);
const $global_o_x__script = _global_script("__tests__/template.marko_0_$global_o_x#7", ($scope) => _el_read($scope["#div/0"]).append($scope.$global.o.x), $global_o_x);
function $setup($scope) {
	$global_o_x__script($scope);
	$global_o__script($scope);
}
const $global_o_key = /*@__PURE__*/ _global_key("o");
const $global_o = /*@__PURE__*/ _global_closure($global_o_key);
const $global_o__script = _global_script("__tests__/template.marko_0_$global_o#6", ($scope) => {
	_el_read($scope["#div/1"]).textContent = JSON.stringify($scope.$global.o);
	_el_read($scope["#div/2"]).textContent = $scope.$global.o.x + JSON.stringify($scope.$global.o);
}, $global_o);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
