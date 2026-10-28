// template.marko
const $template = "<button>t</button><!><ul></ul><div></div><div></div><div></div><div></div><div></div>";
const $walks = " b%b b b b b b b";
const $for_content__setup__$global_a__OR__$global_c = /*@__PURE__*/ _fill_global_for("__tests__/template.marko_2_$global_a#0:7_$global_c#0:8", "#ul/2", ($scope) => _text($scope["#text/0"], $scope.$global.a + $scope.$global.c), "a", "c");
const $for_content__setup = $for_content__setup__$global_a__OR__$global_c;
const $if_content__setup__$global_a__OR__$global_c = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_a#0:7_$global_c#0:8", ($scope) => _text($scope["#text/0"], $scope.$global.a + $scope.$global.c), "a", "c");
const $if_content__setup = $if_content__setup__$global_a__OR__$global_c;
const $if = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li> </li>", "D ", $for_content__setup);
const $open = _let("open/8", ($scope) => {
	$if($scope, $scope.open ? 0 : 1);
	$for($scope, [
		$scope.open ? 1 : 0,
		0,
		1
	]);
});
const $setup__$global_o_x__script = _fill_global_path_script("__tests__/template.marko_0_$global_o_x#19", ($scope) => {
	_el_read($scope["#div/4"]).textContent = $scope.$global.o.x;
	_el_read($scope["#div/4"]).dataset.runs = String(+(_el_read($scope["#div/4"]).dataset.runs || 0) + 1);
}, "o", "x");
const $setup__$global_o_x = $setup__$global_o_x__script;
const $setup__$global_cspNonce__script = _fill_global_script("__tests__/template.marko_0_$global_cspNonce#20", ($scope) => {
	_el_read($scope["#div/5"]).textContent = $scope.$global.cspNonce;
	_el_read($scope["#div/5"]).dataset.runs = String(+(_el_read($scope["#div/5"]).dataset.runs || 0) + 1);
}, "cspNonce");
const $setup__$global_cspNonce = $setup__$global_cspNonce__script;
const $setup__$global__script = _fill_global_script("__tests__/template.marko_0_$global#6", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#div/6"]).dataset.runs = String(+(_el_read($scope["#div/6"]).dataset.runs || 0) + 1);
	}
}, "");
const $setup__$global = $setup__$global__script;
const $setup__$global_a__OR__$global_c__script = _fill_global_script("__tests__/template.marko_0_$global_a#7_$global_c#8", ($scope) => _el_read($scope["#div/3"]).textContent = $scope.$global.a + $scope.$global.c, "a", "c");
const $setup__$global_a__OR__$global_c = $setup__$global_a__OR__$global_c__script;
const $setup__$global_o_x__OR__$global_cspNonce__script = _fill_global_path_script("__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20", ($scope) => {
	_el_read($scope["#div/7"]).textContent = $scope.$global.cspNonce + $scope.$global.o.x;
	_el_read($scope["#div/7"]).dataset.runs = String(+(_el_read($scope["#div/7"]).dataset.runs || 0) + 1);
}, "o", "x", 0, "cspNonce");
const $setup__$global_o_x__OR__$global_cspNonce = $setup__$global_o_x__OR__$global_cspNonce__script;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__$global_o_x($scope);
	$setup__$global_cspNonce($scope);
	$setup__$global($scope);
	$setup__$global_a__OR__$global_c($scope);
	$setup__$global_o_x__OR__$global_cspNonce($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
