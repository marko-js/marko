// template.marko
const $template = "<html><body></body></html>";
const $walks = "D l";
const $setup = () => {};
_load_lazy("ready:__tests__/layout.marko", () => import("./layout.mjs").then((n) => n.o).then(() => {}));
_load_lazy("ready:__tests__/page-a.marko", () => import("./page-a.mjs").then(() => {}));
_load_lazy("ready:__tests__/page-b.marko", () => import("./page-b.mjs").then(() => {}));
const $Layout_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", 0, "<!><!><!>", "b%/&");
const $Layout_content__input_page = /*@__PURE__*/ _closure_get("input_page", ($scope) => $Layout_content__if($scope, $scope._._.input_page === 1 ? 0 : 1), ($scope) => $scope._._);
const $Layout_content__setup = $Layout_content__input_page;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $Layout_content__setup);
const $else_content__input_list = /*@__PURE__*/ _if_closure("#body/0", 1, ($scope) => $input_list$1($scope["#childScope/0"], $scope._.input_list));
const $else_content__setup = ($scope) => {
	$else_content__input_list._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
};
const $if = /*@__PURE__*/ _if("#body/0", "<p>home</p>", 0, 0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $else_content__setup);
const $input_page__closure = /*@__PURE__*/ _closure($Layout_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", ($scope) => {
	$input_page__closure($scope);
	$if($scope, $scope.input_page === 0 ? 0 : 1);
});
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_list($scope, input.list);
};
const $input_list = /*@__PURE__*/ _const("input_list", $else_content__input_list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);

// layout.marko
var layout_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_content: () => $input_content,
	$input_content_direct: () => $input_content_direct,
	$input_list: () => $input_list,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks
});
const $template = "<nav><!></nav><main><!></main>";
const $walks = "D%lD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $await_content__for = /*@__PURE__*/ _for_of("#text/0", "<a> </a>", "D ", 0, $for_content__$params);
const $await_content__list = ($scope, list) => $await_content__for($scope, [list]);
const $await_content__$params = ($scope, $params2) => $await_content__list($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_list = $await_promise;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_list($scope, input.list);
	$input_content($scope, input.content);
};
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template, $walks, $setup, $input);

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
