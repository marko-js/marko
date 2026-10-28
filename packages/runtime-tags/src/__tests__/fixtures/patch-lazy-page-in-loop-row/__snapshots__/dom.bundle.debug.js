// page.marko
const $template = "<button class=row><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/page.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/page.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_n = ($scope, input_n) => _text($scope["#text/1"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button> </button><ul></ul>";
const $walks = " D l b";
let $load_Page_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page.marko.setup.mjs"));
let $load_Page_tag_input_n = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:page.marko.input_n.mjs"), "ready:__tests__/page.marko");
const $for_content__setup = ($scope) => {
	$load_Page_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Page_tag_input_n($scope["#childScope/1"], $scope["#LoopKey"]);
};
const $open = /*@__PURE__*/ _let("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "close" : "open"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li><!></li>", "D%/&", $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, (n) => n]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:page.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
