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
const $template = "<h1>A</h1><p> </p><!><button> </button>";
const $walks = "bD l%b D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/page-a.marko0", "n/8", ($scope) => _text($scope["#text/3"], $scope.n));
const $setup__script = _script("__tests__/page-a.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_note = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $if = /*@__PURE__*/ _if("#text/1", "<p>wide</p>");
const $input_wide = ($scope, input_wide) => $if($scope, input_wide ? 0 : 1);
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_wide($scope, input.wide);
};
var page_a_default = /*@__PURE__*/ _template("__tests__/page-a.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_title($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input$1);

// page-b.marko
const $template = "<h1>B</h1><!><button> </button>";
const $walks = "b%b D l";
const $card_content__count = /*@__PURE__*/ _init_closure_get("__tests__/page-b.marko_2_count#6/init", "count", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._);
const $card_content__setup = ($scope) => {
	$card_content__count($scope);
	$card_content__p($scope);
	$card_content__item($scope);
};
const $card_content__p = /*@__PURE__*/ _closure_get("p", ($scope) => _text($scope["#text/0"], $scope._._.p), ($scope) => $scope._._);
const $card_content__item = /*@__PURE__*/ _closure_get("item", ($scope) => _text($scope["#text/2"], $scope._.item));
const $card_content = /*@__PURE__*/ _content("__tests__/page-b.marko_2*content", "<span><!>/<!>/<!></span>", "D%c%c%", $card_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $card_content($scope));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => $input_title($scope["#childScope/0"], $scope.item));
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count__closure = /*@__PURE__*/ _closure($card_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/page-b.marko0", "count/6", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__closure($scope);
});
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/page-b.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$for($scope, [[1, 2]]);
	$setup__script($scope);
}
const $p__closure = /*@__PURE__*/ _closure($card_content__p);
const $p = /*@__PURE__*/ _const("p", $p__closure);
const $input_note = $p;
const $input = ($scope, input) => $input_note($scope, input.note);
var page_b_default = /*@__PURE__*/ _template("__tests__/page-b.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<html><body></body></html>";
const $walks = "D l";
const $setup = () => {};
_load_lazy("ready:__tests__/layout.marko", () => import("./layout.mjs").then((n) => n.o).then(() => {}));
_load_lazy("ready:__tests__/page-a.marko", () => import("./page-a.mjs").then(() => {}));
_load_lazy("ready:__tests__/page-b.marko", () => import("./page-b.mjs").then(() => {}));
const $else_content2__input_note = /*@__PURE__*/ _closure_get("input_note", 0, ($scope) => $scope._._._);
const $else_content2__setup = $else_content2__input_note;
const $if_content__input_wide = /*@__PURE__*/ _closure_get("input_wide", 0, ($scope) => $scope._._._);
const $if_content__setup = ($scope) => {
	$if_content__input_wide($scope);
	$if_content__input_note($scope);
};
const $if_content__input_note = /*@__PURE__*/ _closure_get("input_note", 0, ($scope) => $scope._._._);
const $Layout_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content__setup, "<!><!><!>", "b%/&", $else_content2__setup);
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
	$if($scope, $scope.input_page === 0 ? 0 : 1);
	$input_page__closure($scope);
});
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_list($scope, input.list);
	$input_wide($scope, input.wide);
	$input_note($scope, input.note);
};
const $input_list = /*@__PURE__*/ _const("input_list", $else_content__input_list);
const $input_wide__closure = /*@__PURE__*/ _closure($if_content__input_wide);
const $input_wide = /*@__PURE__*/ _const("input_wide", $input_wide__closure);
const $input_note__closure = /*@__PURE__*/ _closure($if_content__input_note, $else_content2__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
