// template.marko
_load_lazy("_a", () => import("./page.mjs").then(() => {}));

// page.marko
const $placeholder_content = _content_resume("a1", "Loading");
const $if_content__page = /*@__PURE__*/ _closure_get(7, ($scope) => _attr($scope.a, "href", `?page=${$scope._._._._.d + 1}`), ($scope) => $scope._._._._, "a8");
const $if_content__setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$scope._._._._.f($scope._._._._.d + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__page($scope);
	$if_content__setup__script($scope);
};
const $await_content__if = /*@__PURE__*/ _if(2, "<a>Next</a>", " ", $if_content__setup, "<span>Last page</span>");
const $await_content__page__OR__total = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _fill_join_subscribers("a1", 3, /*@__PURE__*/ _or(5, ($scope) => $await_content__if($scope, $scope._._._.d < $scope.e ? 0 : 1)), () => $await_content__page, 1));
const $await_content__page = /*@__PURE__*/ _init_closure_get("a18", 7, ($scope) => {
	_text($scope.a, $scope._._._.d);
	$await_content__page__OR__total($scope);
}, ($scope) => $scope._._._, "a10");
const $try_content__page = /*@__PURE__*/ _init_closure_get("a19", 7, ($scope) => _text($scope.a, $scope._.d));
const $page = /*@__PURE__*/ _fill_draft("a1", 3, 1, /* @__PURE__ */ _closure($try_content__page, $await_content__page, $if_content__page));
const $_pageSource = _fill_const("a0", 1, ($scope) => $page($scope, $scope.b));
const $go2 = /*@__PURE__*/ _fill_action("a2", 5);
const $go = ($scope) => /*@__PURE__*/ _act((next) => {
	$page($scope, next, 1);
}, 0, $scope, $go2);
_resumed.a0 = $go;
