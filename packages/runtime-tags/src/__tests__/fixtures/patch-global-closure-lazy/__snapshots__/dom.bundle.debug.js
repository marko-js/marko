// template.marko
const $template = "<main><!></main>";
const $walks = "D%/&l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/child.marko_2_$global_brand#5/global", ($scope) => {
	_text($scope["#text/1"], $scope.$global.brand);
});
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for_content__setup = ($scope) => $for_content__$global_brand($scope);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<i><!><!></i>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $on = /*@__PURE__*/ _let("on/3", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko_fill0", "count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$on($scope, true);
	$count($scope, 0);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
