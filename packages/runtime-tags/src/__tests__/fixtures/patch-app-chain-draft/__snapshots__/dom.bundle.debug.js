// home.marko
const $template = "<button class=home>home:<!></button>";
const $walks = " Db%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/home.marko0", "count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/home.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
var home_default = /*@__PURE__*/ _template("__tests__/home.marko", $template, $walks, $setup);

// page.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__limit = ($scope, limit) => _text($scope["#text/0"], limit);
const $await_content__total = ($scope, total) => $await_content__limit($scope, Math.ceil(total / 10));
const $await_content__$params = ($scope, $params2) => $await_content__total($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/page.marko_5*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span class=limit>of <!></span>", "Db%");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__$global_total = /*@__PURE__*/ _global_join("total", "__tests__/page.marko_4_$global_total#9/global", /*@__PURE__*/ _closure_get("$global_total", ($scope) => $try_content2__await_promise($scope, $scope.$global.total), ($scope) => $scope._._));
const $try_content2__setup = ($scope) => {
	$try_content2__$global_total($scope);
	$await_content($scope);
};
const $catch_content = _content_resume("__tests__/page.marko_3*content", "failed");
const $if_content__current = /*@__PURE__*/ _closure_get("current", ($scope) => _text($scope["#text/0"], $scope._._.current - 1), ($scope) => $scope._._);
const $if_content__setup = $if_content__current;
const $try_content__if = /*@__PURE__*/ _if("#text/1", "<span class=prev>prev <!></span>", "Db%", $if_content__setup);
const $try_content__current = /*@__PURE__*/ _closure_get("current", ($scope) => $try_content__if($scope, $scope._.current > 1 ? 0 : 1));
const $try_content__try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup__script = _script("__tests__/page.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope._.go($scope._.current + 1);
}));
const $try_content__setup = ($scope) => {
	$try_content__current($scope);
	$try_content__page($scope);
	$try_content__go_pending($scope);
	$try_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try_content__setup__script($scope);
};
const $try_content__page = /*@__PURE__*/ _init_closure_get("__tests__/page.marko_1_page#5/init", "page", ($scope) => _text($scope["#text/2"], $scope._.page));
const $try_content__go_pending = /*@__PURE__*/ _init_closure_get("__tests__/page.marko_1_go_pending#8/init", "go_pending", ($scope) => _text($scope["#text/3"], $scope._.go_pending ? "…" : ""));
const $params3 = ($scope, params) => $params_page($scope, params?.page);
const $current__closure = /*@__PURE__*/ _closure($try_content__current, $if_content__current);
const $current = _fill_const_resume("__tests__/page.marko0", "current", ($scope) => {
	$_pageSource($scope, $scope.current);
	$current__closure($scope);
});
const $params_page = $current;
const $global_params = /*@__PURE__*/ _global_join("params", "__tests__/page.marko_0_$global_params#3/global", ($scope, $global_params) => $params3($scope, $scope.$global.params));
const $page__closure = /*@__PURE__*/ _closure($try_content__page);
const $page = /*@__PURE__*/ _fill_draft("__tests__/page.marko1", "page/5", "current/4", $page__closure);
const $_pageSource = ($scope) => {
	$page($scope, $scope.current);
};
const $go2 = /*@__PURE__*/ _fill_action("__tests__/page.marko2", "go/7", ($scope) => $go_pending($scope, $scope.go.pending));
const $go_pending__closure = /*@__PURE__*/ _closure($try_content__go_pending);
const $go_pending = /*@__PURE__*/ _const("go_pending", $go_pending__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<button class=next>next</button><!><span class=of><!><!></span><!><!>", " b%bD%b%l%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$go2($scope, $go($scope));
	$global_params($scope, $scope.$global.params);
}
const $go = ($scope) => /*@__PURE__*/ _act(function* (next) {
	$page($scope, next, 1);
}, 1, $scope, $go2);
_resume("__tests__/page.marko_0/go", $go);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, "b%c", $setup);

// layout.marko
const $template$1 = "<header><button class=menu> </button></header><main><!></main>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _fill_let("__tests__/layout.marko0", "open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "close" : "open"));
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
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
_load_lazy("ready:__tests__/home.marko", () => import("./home.mjs").then(() => {}));
_load_lazy("ready:__tests__/page.marko", () => import("./page.mjs").then(() => {}));
const $Layout_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", 0, "<!><!><!>", "b%/&");
const $Layout_content__input_page = /*@__PURE__*/ _closure_get("input_page", ($scope) => $Layout_content__if($scope, $scope._.input_page <= 0 ? 0 : 1));
const $Layout_content__setup = $Layout_content__input_page;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Layout_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
}
const $input = ($scope, input) => $input_page($scope, input.page);
const $input_page__closure = /*@__PURE__*/ _closure($Layout_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
