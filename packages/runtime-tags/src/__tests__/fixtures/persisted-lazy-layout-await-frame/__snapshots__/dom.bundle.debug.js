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
_load_lazy("ready:__tests__/docs.marko", () => import("./docs.mjs").then((n) => n.o).then(() => {}));
_load_lazy("ready:__tests__/page-a.marko", () => import("./page-a.mjs").then(() => {}));
_load_lazy("ready:__tests__/page-b.marko", () => import("./page-b.mjs").then(() => {}));
const $Docs_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", 0, "<!><!><!>", "b%/&");
const $Docs_content__input_page = /*@__PURE__*/ _closure_get("input_page", ($scope) => $Docs_content__if($scope, $scope._._._.input_page === 1 ? 0 : 1), ($scope) => $scope._._._);
const $Docs_content__setup = $Docs_content__input_page;
const $Docs_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $Docs_content__setup);
const $else_content__input_list = /*@__PURE__*/ _closure_get("input_list", ($scope) => $input_list$1($scope["#childScope/0"], $scope._._.input_list), ($scope) => $scope._._);
const $else_content__setup = ($scope) => {
	$else_content__input_list($scope);
	$setup$2($scope["#childScope/0"]);
	$input_content_direct$1($scope["#childScope/0"], $Docs_content($scope));
};
const $Root_content__if = /*@__PURE__*/ _if("#text/0", "<p>home</p>", 0, 0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$2), $else_content__setup);
const $Root_content__input_page = /*@__PURE__*/ _closure_get("input_page", ($scope) => $Root_content__if($scope, $scope._.input_page === 0 ? 0 : 1));
const $Root_content__setup = $Root_content__input_page;
const $Root_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Root_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Root_content($scope));
}
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_list($scope, input.list);
};
const $input_page__closure = /*@__PURE__*/ _closure($Root_content__input_page, $Docs_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
const $input_list__closure = /*@__PURE__*/ _closure($else_content__input_list);
const $input_list = /*@__PURE__*/ _const("input_list", $input_list__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/icon.marko
const $template$1 = "<svg></svg>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if_content__input_name = /*@__PURE__*/ _if_closure("#svg/0", 0, ($scope) => _attr($scope["#path/0"], "d", $scope._.input_name));
const $if_content__setup$1 = $if_content__input_name;
const $if = /*@__PURE__*/ _if("#svg/0", "<path></path>", " ", $if_content__setup$1);
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	$if_content__input_name($scope);
	_attr($scope["#svg/0"], "viewBox", $scope.input_name);
	$if($scope, $scope.input_name ? 0 : 1);
});
const $input$1 = ($scope, input) => $input_name($scope, input.name);
var icon_default = /*@__PURE__*/ _template("__tests__/tags/icon.marko", $template$1, " b", 0, $input$1);

// docs.marko
var docs_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_content: () => $input_content,
	$input_content_direct: () => $input_content_direct,
	$input_list: () => $input_list,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks
});
const $template = "<nav><!></nav><article><!></article>";
const $walks = "D%lD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $if_content__list_ = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_name($scope["#childScope/0"], $scope._.list_0));
const $if_content__setup = $if_content__list_;
const $await_content__for = /*@__PURE__*/ _for_of("#text/0", "<a> </a>", "D ", 0, $for_content__$params);
const $await_content__list = ($scope, list) => {
	$await_content__list_($scope, list?.[0]);
	$await_content__for($scope, [list]);
};
const $await_content__if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $await_content__list_ = /*@__PURE__*/ _const("list_0", ($scope) => {
	$if_content__list_($scope);
	$await_content__if($scope, $scope.list_0 ? 0 : 1);
});
const $await_content__$params = ($scope, $params2) => $await_content__list($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!><!>", "b%b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_list = $await_promise;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_list($scope, input.list);
	$input_content($scope, input.content);
};
var docs_default = /*@__PURE__*/ _template("__tests__/docs.marko", $template, $walks, $setup, $input);

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
