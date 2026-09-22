// page.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $placeholder_content = _content_resume("__tests__/page.marko_5*content", "Loading");
const $if_content__page = /*@__PURE__*/ _closure_get("page", ($scope) => _attr($scope["#a/0"], "href", `?page=${$scope._._._._.page + 1}`), ($scope) => $scope._._._._, "__tests__/page.marko_4_page#3/pending");
const $if_content__setup__script = _script("__tests__/page.marko_4", ($scope) => _on($scope["#a/0"], "click", function() {
	$scope._._._._.go($scope._._._._.page + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__page($scope);
	$if_content__setup__script($scope);
};
const $await_content__if = /*@__PURE__*/ _if("#text/2", "<a>Next</a>", " ", $if_content__setup, "<span>Last page</span>");
const $await_content__page__OR__total = /*@__PURE__*/ _fill_join("__tests__/page.marko3", "total", /*@__PURE__*/ _fill_join_subscribers("__tests__/page.marko1", "page", /*@__PURE__*/ _or(5, ($scope) => $await_content__if($scope, $scope._._._.page < $scope.total ? 0 : 1)), () => $await_content__page, 1));
const $await_content__page = /*@__PURE__*/ _init_closure_get("__tests__/page.marko_3_page#3/init", "page", ($scope) => {
	_text($scope["#text/0"], $scope._._._.page);
	$await_content__page__OR__total($scope);
}, ($scope) => $scope._._._, "__tests__/page.marko_3_page#3/pending");
const $await_content__setup = $await_content__page;
const $await_content__total = /*@__PURE__*/ _fill_const("__tests__/page.marko3", "total", ($scope) => {
	$await_content__page__OR__total($scope);
	_text($scope["#text/1"], $scope.total);
}, $await_content__page__OR__total);
const $await_content__$params = ($scope, $params2) => $await_content__total($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=summary>Page <!> of <!></p><!><!>", "Db%c%l%", $await_content__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__$global_total = /*@__PURE__*/ _global_join("total", "__tests__/page.marko_2_$global_total#6/global", /*@__PURE__*/ _closure_get("$global_total", ($scope) => $try_content2__await_promise($scope, $scope.$global.total), ($scope) => $scope._._));
const $try_content2__setup = ($scope) => {
	$try_content2__$global_total($scope);
	$await_content($scope);
};
const $try_content__page = /*@__PURE__*/ _init_closure_get("__tests__/page.marko_1_page#3/init", "page", ($scope) => _text($scope["#text/0"], $scope._.page));
const $try_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup = ($scope) => {
	$try_content__page($scope);
	$try_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $page__closure = /*@__PURE__*/ _closure($try_content__page, $await_content__page, $if_content__page);
const $page = /*@__PURE__*/ _fill_draft("__tests__/page.marko1", "page/3", "_pageSource/1", $page__closure);
const $_pageSource = _fill_const_resume("__tests__/page.marko0", "_pageSource", ($scope) => $page($scope, $scope._pageSource));
const $global_page = /*@__PURE__*/ _global_join("page", "__tests__/page.marko_0_$global_page#2/global", ($scope, $global_page) => $_pageSource($scope, $scope.$global.page));
const $go2 = /*@__PURE__*/ _fill_action("__tests__/page.marko2", "go/5");
const $try = /*@__PURE__*/ _try("#text/0", "<span>Page <!></span><!><!>", "Db%l%", $try_content__setup);
function $setup($scope) {
	$try($scope, {});
	$go2($scope, $go($scope));
	$global_page($scope, $scope.$global.page);
}
const $go = ($scope) => /*@__PURE__*/ _act((next) => {
	$page($scope, next, 1);
}, 0, $scope, $go2);
_resumed["__tests__/page.marko_0/go"] = $go;
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, "b%c", $setup);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
_load_lazy("ready:__tests__/page.marko", () => import("./page.mjs").then(() => {}));
const $if = /*@__PURE__*/ _if("#text/0", "<p>Book details</p>", 0, 0, "<!><!><!>", "b%/&");
const $input_details = ($scope, input_details) => $if($scope, input_details ? 0 : 1);
const $input = ($scope, input) => $input_details($scope, input.details);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
