// template.marko
const $template = "<main><!></main>";
const $walks = "D%/&l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<span></span>";
const $walks = "b";
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("brand", $scope.$global.brand));
const $setup = $setup__script;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
