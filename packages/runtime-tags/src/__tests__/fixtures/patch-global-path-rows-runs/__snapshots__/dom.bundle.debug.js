// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $template = "<button>+</button><ul></ul>";
const $walks = " b b";
const $for_content__setup__$global_o = /*@__PURE__*/ _fill_global_path_for("__tests__/template.marko_1_$global_o#0:9", "#ul/1", ($scope) => _text($scope["#text/0"], track("li", $scope.$global.o.x)), "o", "x");
const $for_content__setup = $for_content__setup__$global_o;
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/1", "<li> </li>", "D ", $for_content__setup);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $for($scope, [
	$scope.n,
	0,
	1
]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
