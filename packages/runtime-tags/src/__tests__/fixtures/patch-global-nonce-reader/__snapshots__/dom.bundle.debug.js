// template.marko
const $template = "<p> </p><div></div>";
const $walks = "D l b";
const $global_x_key = /*@__PURE__*/ _global_key("$global_x/3", "x");
const $global_x = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_x#4/subscribe", $global_x_key, ($scope) => _text($scope["#text/0"], $scope.$global.x));
const $global_cspNonce_key = /*@__PURE__*/ _global_key("$global_cspNonce/4", "cspNonce");
const $global_cspNonce = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_cspNonce#6/subscribe", $global_cspNonce_key, ($scope) => $global_cspNonce__script($scope));
const $global_cspNonce__script = _global_script("__tests__/template.marko_0_$global_cspNonce#6", ($scope) => {
	_el_read($scope["#div/1"]).textContent = $scope.$global.cspNonce;
	_el_read($scope["#div/1"]).dataset.runs = String(+(_el_read($scope["#div/1"]).dataset.runs || 0) + 1);
}, $global_cspNonce);
function $setup($scope) {
	$global_cspNonce($scope);
	$global_x($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
