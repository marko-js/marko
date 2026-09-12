// root.marko
const $template$1 = "<html><body><header>site</header><main><!></main></body></html>";
const $walks$1 = "EbD%n";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var root_default = /*@__PURE__*/ _template("__tests__/root.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
_load_lazy("ready:__tests__/docs.marko", () => import("./docs.mjs").then((n) => n.i).then(() => {}));
_load_lazy("ready:__tests__/page-a.marko", () => import("./page-a.mjs").then(() => {}));
_load_lazy("ready:__tests__/page-b.marko", () => import("./page-b.mjs").then(() => {}));
const $Docs_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", 0, "<!><!><!>", "b%/&");
const $Docs_content__input_page = /*@__PURE__*/ _closure_get("input_page", ($scope) => $Docs_content__if($scope, $scope._._._.input_page === 1 ? 0 : 1), ($scope) => $scope._._._);
const $Docs_content__setup = $Docs_content__input_page;
const $Docs_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $Docs_content__setup);
const $else_content__setup = ($scope) => $input_content_direct$1($scope["#childScope/0"], $Docs_content($scope));
const $Root_content__if = /*@__PURE__*/ _if("#text/0", "<p>home</p>", 0, 0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$2), $else_content__setup);
const $Root_content__input_page = /*@__PURE__*/ _closure_get("input_page", ($scope) => $Root_content__if($scope, $scope._.input_page === 0 ? 0 : 1));
const $Root_content__setup = $Root_content__input_page;
const $Root_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Root_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Root_content($scope));
}
const $input = ($scope, input) => $input_page($scope, input.page);
const $input_page__closure = /*@__PURE__*/ _closure($Root_content__input_page, $Docs_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// docs.marko
var docs_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_content: () => $input_content,
	$input_content_direct: () => $input_content_direct,
	$template: () => $template,
	$walks: () => $walks
});
const $template = "<nav>docs</nav><article><!></article>";
const $walks = "bD%l";
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var docs_default = /*@__PURE__*/ _template("__tests__/docs.marko", $template, $walks, 0, $input);

// page-a.marko
const $template = "<h1>A</h1>";
const $walks = "b";
const $setup = () => {};
var page_a_default = /*@__PURE__*/ _template("__tests__/page-a.marko", $template, "b");

// page-b.marko
const $template = "<h1>B</h1>";
const $walks = "b";
const $setup = () => {};
var page_b_default = /*@__PURE__*/ _template("__tests__/page-b.marko", $template, "b");
