// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $template = "<button>+</button><ul></ul>";
const $walks = " b b";
const $for_content__$global_o_x = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_$global_o_x#0:10/setup", "#ul/1", ($scope) => _text($scope["#text/0"], track("li", $scope.$global.o.x)), 3);
const $for_content__setup = $for_content__$global_o_x;
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/1", "<li> </li>", "D ", $for_content__setup);
const $n = _let("n/2", ($scope) => $for($scope, [$scope.n]));
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#10/subscribe", $for_content__$global_o_x, "o", "x");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$global_o_x($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
