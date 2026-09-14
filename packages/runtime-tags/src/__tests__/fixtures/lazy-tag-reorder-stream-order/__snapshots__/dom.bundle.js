// template.marko
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
const $placeholder_content = _content_resume("b0", "loading");
const $await_content__shared = _closure_get(3, ($scope) => $load_Child_tag_input_shared($scope.b, $scope._._.c), ($scope) => $scope._._, "b2");

// child.marko
const $shared = /*@__PURE__*/ _let(7);
const $input_shared = $shared;
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + $scope.h[$scope.g]);
}));
