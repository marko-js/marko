// tags/rows.marko
const $await_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $await_content__v = ($scope, v) => _text($scope.b, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em><!>:<!></em>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _fill_join("b3", 4, /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__await_promise($scope, $scope._.e)));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for = /*@__PURE__*/ _for_of(0, "<div><!></div>", "D%", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);

// template.marko
const $placeholder_content = _content$1("a4", "<i>loading</i>");
const $try_content__items = _init_closure_get("a7", 7, ($scope) => $input_items($scope.a, $scope._.f), 0, "a3");
const $items = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($try_content__items));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.f.slice(1));
}));
