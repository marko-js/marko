// template.marko
const $template = "<main><!></main>";
const $walks = "D%/&l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count__OR__$global_brand = /*@__PURE__*/ _or_patch("__tests__/child.marko_0_count#2_$global_brand#6/setup", 3, ($scope) => _text($scope["#text/1"], _global_read($scope.$global, "brand") + ":" + $scope.count));
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko_fill0", "count/2", $count__OR__$global_brand);
const $global_brand = _fill_global_resume("__tests__/child.marko_0_$global_brand#6/subscribe", $count__OR__$global_brand, "brand");
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$global_brand($scope);
	$setup__script($scope);
	$count($scope, 0);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
