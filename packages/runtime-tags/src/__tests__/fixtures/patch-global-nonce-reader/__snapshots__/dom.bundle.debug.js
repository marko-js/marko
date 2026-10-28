// template.marko
const $template = "<p> </p><div></div>";
const $walks = "D l b";
const $setup__$global_x = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_x#4", ($scope) => _text($scope["#text/0"], $scope.$global.x), "x");
const $setup__$global_cspNonce__script = _fill_global_script("__tests__/template.marko_0_$global_cspNonce#6", ($scope) => {
	_el_read($scope["#div/1"]).textContent = $scope.$global.cspNonce;
	_el_read($scope["#div/1"]).dataset.runs = String(+(_el_read($scope["#div/1"]).dataset.runs || 0) + 1);
}, "cspNonce");
const $setup__$global_cspNonce = $setup__$global_cspNonce__script;
function $setup($scope) {
	$setup__$global_cspNonce($scope);
	$setup__$global_x($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
