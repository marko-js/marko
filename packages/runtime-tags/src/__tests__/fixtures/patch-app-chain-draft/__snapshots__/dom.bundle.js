// layout.marko
const $open = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => _text($scope.b, $scope.g ? "close" : "open"));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
_load_lazy("_a", () => import("./home.mjs").then(() => {}));
_load_lazy("_c", () => import("./page.mjs").then(() => {}));

// home.marko
const $count = /*@__PURE__*/ _fill_let("a0", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// page.marko
const $placeholder_content = _content_resume("c2", "loading");
const $catch_content = _content_resume("c5", "failed");
const $if_content__current = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.e - 1), ($scope) => $scope._._);
const $try_content__if = /*@__PURE__*/ _if(1, "<span class=prev>prev <!></span>", "Db%", $if_content__current);
const $try_content__current = /*@__PURE__*/ _closure_get(10, ($scope) => $try_content__if($scope, $scope._.e > 1 ? 0 : 1));
const $try_content__setup__script = _script("c10", ($scope) => _on($scope.a, "click", function() {
	$scope._.h($scope._.e + 1);
}));
const $try_content__page = /*@__PURE__*/ _init_closure_get("c17", 11, ($scope) => _text($scope.c, $scope._.f));
const $try_content__go_pending = /*@__PURE__*/ _init_closure_get("c18", 12, ($scope) => _text($scope.d, $scope._.i ? "…" : ""));
const $current__closure = /*@__PURE__*/ _closure($try_content__current, $if_content__current);
const $params_page = _fill_const("c0", 4, ($scope) => {
	$_pageSource($scope, $scope.e);
	$current__closure($scope);
});
const $page = /*@__PURE__*/ _fill_draft("c1", 5, 4, /* @__PURE__ */ _closure($try_content__page));
const $_pageSource = ($scope) => {
	$page($scope, $scope.e);
};
const $go2 = /*@__PURE__*/ _fill_action("c2", 7, ($scope) => $go_pending($scope, $scope.h.pending));
const $go_pending = /*@__PURE__*/ _const(8, /* @__PURE__ */ _closure($try_content__go_pending));
const $go = ($scope) => /*@__PURE__*/ _act(function* (next) {
	$page($scope, next, 1);
}, 1, $scope, $go2);
_resume("c0", $go);
