// template.marko
const $template = "<svg><foreignObject class=host><!></foreignObject></svg>";
const $walks = "E%/&m";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<input value=lazy>";
const $walks = "b";
const $setup = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b");

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
