// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $global_o_x_key = /*@__PURE__*/ _global_key("$global_o_x/5", "o", "x");
const $global_o_x__script = _script("__tests__/template.marko_0_$global_o_x#7", ($scope) => {
	$global_o_x.r($scope);
	_el_read($scope["#div/0"]).append($scope.$global.o.x);
});
const $global_o_x = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_o_x#7/subscribe", $global_o_x_key, $global_o_x__script);
const $global_o_key = /*@__PURE__*/ _global_key("$global_o/4", "o");
const $global_o__script = _script("__tests__/template.marko_0_$global_o#6", ($scope) => {
	$global_o.r($scope);
	_el_read($scope["#div/1"]).textContent = JSON.stringify($scope.$global.o);
	_el_read($scope["#div/2"]).textContent = $scope.$global.o.x + JSON.stringify($scope.$global.o);
});
const $global_o = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_o#6/subscribe", $global_o_key, $global_o__script);
function $setup($scope) {
	$global_o_x($scope);
	$global_o($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
