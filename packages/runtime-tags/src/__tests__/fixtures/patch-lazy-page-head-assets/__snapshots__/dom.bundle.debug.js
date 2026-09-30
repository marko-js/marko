// layout.marko
const $template$1 = "<!><html><head><title>app</title></head><body><main><!></main></body></html>";
const $walks$1 = "bDbE%n";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
_load_lazy("ready:__tests__/page-a.marko", () => import("./page-a.mjs").then(() => {}));
_load_lazy("ready:__tests__/page-b.marko", () => import("./page-b.mjs").then(() => {}));
const $Layout_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", 0, "<!><!><!>", "b%/&");
const $Layout_content__input_page = /*@__PURE__*/ _closure_get("input_page/4", ($scope) => $Layout_content__if($scope, $scope._.input_page <= 0 ? 0 : 1), 0, "__tests__/template.marko_1_input_page#0:3/subscribe");
const $Layout_content__setup = $Layout_content__input_page;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Layout_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
}
const $input = ($scope, input) => $input_page($scope, input.page);
const $input_page__closure = /*@__PURE__*/ _closure($Layout_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

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
