// template.marko
const $template = "<button>t</button><!><ul></ul><div></div><div></div><div></div><div></div><div></div>";
const $walks = " b%b b b b b b b";
const $global_a_key = /*@__PURE__*/ _global_key("$global_a/12", "a");
const $for_content__$global_a = /*@__PURE__*/ _global_for("__tests__/template.marko_2_$global_a#0:7/subscribe", $global_a_key, "#ul/2");
const $global_c_key = /*@__PURE__*/ _global_key("$global_c/13", "c");
const $for_content__$global_c = /*@__PURE__*/ _global_for("__tests__/template.marko_2_$global_c#0:8/subscribe", $global_c_key, "#ul/2");
const $for_content__$global_a__OR__$global_c = /*@__PURE__*/ _global_or(1, ($scope) => _text($scope["#text/0"], $scope.$global.a + $scope.$global.c), $for_content__$global_a, $for_content__$global_c);
const $for_content__setup = $for_content__$global_a__OR__$global_c;
const $if_content__$global_a = /*@__PURE__*/ _global_if("__tests__/template.marko_1_$global_a#0:7/subscribe", $global_a_key, "#text/1", 0);
const $if_content__$global_c = /*@__PURE__*/ _global_if("__tests__/template.marko_1_$global_c#0:8/subscribe", $global_c_key, "#text/1", 0);
const $if_content__$global_a__OR__$global_c = /*@__PURE__*/ _global_or(1, ($scope) => _text($scope["#text/0"], $scope.$global.a + $scope.$global.c), $if_content__$global_a, $if_content__$global_c);
const $if_content__setup = $if_content__$global_a__OR__$global_c;
const $if = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li> </li>", "D ", $for_content__setup);
const $open = _let("open/8", ($scope) => {
	$if($scope, $scope.open ? 0 : 1);
	$for($scope, [$scope.open ? 1 : 0]);
});
const $global_o_x_key = /*@__PURE__*/ _global_key("$global_o_x/15", "o", "x");
const $global_o_x = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_o_x#19/subscribe", $global_o_x_key, ($scope) => $global_o_x__script($scope));
const $global_o_x__script = _global_script("__tests__/template.marko_0_$global_o_x#19", ($scope) => {
	_el_read($scope["#div/4"]).textContent = $scope.$global.o.x;
	_el_read($scope["#div/4"]).dataset.runs = String(+(_el_read($scope["#div/4"]).dataset.runs || 0) + 1);
}, $global_o_x);
const $global_cspNonce_key = /*@__PURE__*/ _global_key("$global_cspNonce/16", "cspNonce");
const $global_cspNonce = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_cspNonce#20/subscribe", $global_cspNonce_key, ($scope) => $global_cspNonce__script($scope));
const $global_cspNonce__script = _global_script("__tests__/template.marko_0_$global_cspNonce#20", ($scope) => {
	_el_read($scope["#div/5"]).textContent = $scope.$global.cspNonce;
	_el_read($scope["#div/5"]).dataset.runs = String(+(_el_read($scope["#div/5"]).dataset.runs || 0) + 1);
}, $global_cspNonce);
const $global_key = /*@__PURE__*/ _global_key("$global/6/11");
const $global2 = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global#6/subscribe", $global_key, ($scope) => $global2__script($scope));
const $global2__script = _global_script("__tests__/template.marko_0_$global#6", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#div/6"]).dataset.runs = String(+(_el_read($scope["#div/6"]).dataset.runs || 0) + 1);
	}
}, $global2);
const $global_a = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_a#7/subscribe", $global_a_key);
const $global_c = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_c#8/subscribe", $global_c_key);
const $global_a__OR__$global_c = /*@__PURE__*/ _global_or(9, ($scope) => $global_a__OR__$global_c__script($scope), $global_a, $global_c);
const $global_a__OR__$global_c__script = _global_script("__tests__/template.marko_0_$global_a#7_$global_c#8", ($scope) => _el_read($scope["#div/3"]).textContent = $scope.$global.a + $scope.$global.c, $global_a__OR__$global_c);
const $global_o_x__OR__$global_cspNonce = /*@__PURE__*/ _global_or(10, ($scope) => $global_o_x__OR__$global_cspNonce__script($scope), $global_o_x, $global_cspNonce);
const $global_o_x__OR__$global_cspNonce__script = _global_script("__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20", ($scope) => {
	_el_read($scope["#div/7"]).textContent = $scope.$global.cspNonce + $scope.$global.o.x;
	_el_read($scope["#div/7"]).dataset.runs = String(+(_el_read($scope["#div/7"]).dataset.runs || 0) + 1);
}, $global_o_x__OR__$global_cspNonce);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$global_o_x($scope);
	$global_cspNonce($scope);
	$global2($scope);
	$global_a__OR__$global_c($scope);
	$global_o_x__OR__$global_cspNonce($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
