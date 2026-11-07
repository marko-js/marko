// template.marko
const $template = "<button>t</button><!><ul></ul><div></div><div></div><div></div><div></div><div></div>";
const $walks = " b%b b b b b b b";
const $for_content__$global_a__OR__$global_c = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope.$global.a + $scope.$global.c));
const $for_content__$global_a = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_2_$global_a#0:7/setup", "#ul/2", $for_content__$global_a__OR__$global_c, 11);
const $for_content__setup = ($scope) => {
	$for_content__$global_a._($scope);
	$for_content__$global_c._($scope);
};
const $for_content__$global_c = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_2_$global_c#0:8/setup", "#ul/2", $for_content__$global_a__OR__$global_c, 12);
const $if_content__$global_a__OR__$global_c = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope.$global.a + $scope.$global.c));
const $if_content__$global_a = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_a#0:7/setup", "#text/1", 0, $if_content__$global_a__OR__$global_c);
const $if_content__setup = ($scope) => {
	$if_content__$global_a._($scope);
	$if_content__$global_c._($scope);
};
const $if_content__$global_c = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_c#0:8/setup", "#text/1", 0, $if_content__$global_a__OR__$global_c);
const $if = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li> </li>", "D ", $for_content__setup);
const $open = _let("open/8", ($scope) => {
	$if($scope, $scope.open ? 0 : 1);
	$for($scope, [$scope.open ? 1 : 0]);
});
const $global_o_x__OR__$global_cspNonce__script = _script("__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20", ($scope) => {
	_el_read($scope["#div/7"]).textContent = $scope.$global.cspNonce + $scope.$global.o.x;
	_el_read($scope["#div/7"]).dataset.runs = String(+(_el_read($scope["#div/7"]).dataset.runs || 0) + 1);
});
const $global_o_x__OR__$global_cspNonce = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20/setup", 10, $global_o_x__OR__$global_cspNonce__script);
const $global_o_x__script = _script("__tests__/template.marko_0_$global_o_x#19", ($scope) => {
	_el_read($scope["#div/4"]).textContent = $scope.$global.o.x;
	_el_read($scope["#div/4"]).dataset.runs = String(+(_el_read($scope["#div/4"]).dataset.runs || 0) + 1);
});
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#19/subscribe", ($scope) => {
	$global_o_x__OR__$global_cspNonce($scope);
	$global_o_x__script($scope);
}, "o", "x");
const $global_cspNonce__script = _script("__tests__/template.marko_0_$global_cspNonce#20", ($scope) => {
	_el_read($scope["#div/5"]).textContent = $scope.$global.cspNonce;
	_el_read($scope["#div/5"]).dataset.runs = String(+(_el_read($scope["#div/5"]).dataset.runs || 0) + 1);
});
const $global_cspNonce = _fill_global_resume("__tests__/template.marko_0_$global_cspNonce#20/subscribe", ($scope) => {
	$global_o_x__OR__$global_cspNonce($scope);
	$global_cspNonce__script($scope);
}, "cspNonce");
const $global2__script = _script("__tests__/template.marko_0_$global#6", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#div/6"]).dataset.runs = String(+(_el_read($scope["#div/6"]).dataset.runs || 0) + 1);
	}
});
const $global2 = _fill_global_resume("__tests__/template.marko_0_$global#6/subscribe", $global2__script, "");
const $global_a__OR__$global_c__script = _script("__tests__/template.marko_0_$global_a#7_$global_c#8", ($scope) => _el_read($scope["#div/3"]).textContent = $scope.$global.a + $scope.$global.c);
const $global_a__OR__$global_c = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_$global_a#7_$global_c#8/setup", 9, $global_a__OR__$global_c__script);
const $global_a = _fill_global_resume("__tests__/template.marko_0_$global_a#7/subscribe", ($scope) => {
	$global_a__OR__$global_c($scope);
	$if_content__$global_a($scope);
	$for_content__$global_a($scope);
}, "a");
const $global_c = _fill_global_resume("__tests__/template.marko_0_$global_c#8/subscribe", ($scope) => {
	$global_a__OR__$global_c($scope);
	$if_content__$global_c($scope);
	$for_content__$global_c($scope);
}, "c");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$global_o_x($scope);
	$global_cspNonce($scope);
	$global2($scope);
	$global_a($scope);
	$global_c($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
