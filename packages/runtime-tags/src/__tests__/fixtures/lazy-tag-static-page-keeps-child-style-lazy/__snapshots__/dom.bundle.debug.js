// template.marko
const $template = "<!><html><head><title>Static</title></head><body><!></body></html>";
const $walks = "bDbD%/&m";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:static-child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/v:static-child.marko.css
var v_static_child_marko_default = "\n  .child { color: green }\n";

// tags/static-child.marko
const $template = "<span class=child>Static</span>";
const $walks = "b";
const $setup = () => {};
var static_child_default = /*@__PURE__*/ _template("__tests__/tags/static-child.marko", $template, "b");

// tags/v:static-child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
