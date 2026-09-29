// page.marko
const $template = "<button class=row><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/page.marko0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/page.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_n = ($scope, input_n) => _text($scope["#text/1"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button> </button><ul></ul>";
const $walks = " D l b";
_load_lazy("ready:__tests__/page.marko", () => import("./page.mjs").then(() => {}));
const $open = /*@__PURE__*/ _let("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "close" : "open"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li><!></li>", "D%/&");
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, (n) => n]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
