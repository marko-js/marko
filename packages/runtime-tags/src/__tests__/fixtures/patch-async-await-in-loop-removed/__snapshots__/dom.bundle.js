// tags/rows.marko
const $await_content__item_id = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d));
const $await_content__setup = $await_content__item_id;
const $await_content__v = ($scope, v) => _text($scope.b, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em><!>:<!></em>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__await_promise($scope, $scope._.e)));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for_content__item_id = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($await_content__item_id));
const $for = /*@__PURE__*/ _for_of(0, "<div><!></div>", "D%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);

// template.marko
const $items = /*@__PURE__*/ _let(5, ($scope) => $input_items($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.f.slice(1));
}));
