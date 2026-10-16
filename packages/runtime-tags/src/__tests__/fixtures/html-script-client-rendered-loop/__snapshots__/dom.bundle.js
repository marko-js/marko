// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__setup = ($scope) => _start_late($scope.b, "\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (main.dataset.ran || \"\") + document.currentScript.previousElementSibling.textContent; }\n    ");
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<p> </p><script><\/script>", "D l! ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, String.fromCharCode(97 + $scope.c.length)]);
}));
