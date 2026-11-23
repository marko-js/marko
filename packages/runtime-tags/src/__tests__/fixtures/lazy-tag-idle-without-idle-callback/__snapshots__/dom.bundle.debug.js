// child.marko
const $template = "<span>loaded</span>";
const $walks = "b";
const $setup = ($_) => {};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b");

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/child.marko", /*@__PURE__*/ _load_idle_trigger());
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
const $if_content__setup = ($scope) => $load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
