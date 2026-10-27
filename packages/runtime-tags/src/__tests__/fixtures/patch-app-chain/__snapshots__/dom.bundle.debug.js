// page-a.marko
const $template = "<button class=a>a:<!></button>";
const $walks = " Db%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/page-a.marko_fill0", "count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/page-a.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
var page_a_default = /*@__PURE__*/ _template("__tests__/page-a.marko", $template, $walks, $setup);

// page-b.marko
const $template = "<button class=b>b:<!></button>";
const $walks = " Db%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/page-b.marko_fill0", "count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/page-b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
var page_b_default = /*@__PURE__*/ _template("__tests__/page-b.marko", $template, $walks, $setup);

// layout.marko
const $template$1 = "<header><button> </button></header><main><!></main>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _fill_let("__tests__/layout.marko_fill0", "open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "close" : "open"));
const $setup__script = _script("__tests__/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
let $load_PageA_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page-a.marko.setup.mjs"));
let $load_PageB_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page-b.marko.setup.mjs"));
const $else_content__setup = ($scope) => $load_PageB_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if_content__setup = ($scope) => $load_PageA_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $Layout_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content__setup, "<!><!><!>", "b%/&", $else_content__setup);
const $Layout_content__input_page = /*@__PURE__*/ _closure_get("input_page/4", ($scope) => $Layout_content__if($scope, $scope._.input_page <= 0 ? 0 : 1), 0, "__tests__/template.marko_1_input_page#0:3/subscribe");
const $Layout_content__setup = $Layout_content__input_page;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Layout_content__setup);
const $setup__$global__script = _fill_global_script("__tests__/template.marko_0_$global#3", ($scope) => $scope.$global.log?.("router"), "");
const $setup__$global = $setup__$global__script;
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
	$setup__$global($scope);
}
const $input = ($scope, input) => $input_page($scope, input.page);
const $input_page__closure = /*@__PURE__*/ _closure($Layout_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:page-a.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:page-b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
