// child.marko
const $template = "<button>count: <!></button>";
const $walks = " Db%l";
const $count = /* @__PURE__ */ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + $scope.$global.config.step);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
const $setup = $load_Child_setup;
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
