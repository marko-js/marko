// template.marko
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
_enable_catch();
const $placeholder_content = _content_resume("b0", "loading...", "b");
const $try_content__count = /* @__PURE__ */ _closure_get(5, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.f));
const $count__closure = /* @__PURE__ */ _closure($try_content__count);
const $count__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});

// child.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
