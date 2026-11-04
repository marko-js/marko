// tags/panel.marko
const $template = "<ul></ul>";
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.name);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li> </li>", "D ", 0, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows]);

// template.marko
const $wrapper_content__input_bodyText = /*@__PURE__*/ _closure_get_patch("a4", 14, ($scope) => _text($scope.a, $scope._.k), 0, "a9", 0);
const $wrapper_content = _content$1("a5", "<p> </p>", "D ", $wrapper_content__input_bodyText);
const $guest_content__input_guestText = /*@__PURE__*/ _closure_get_patch("a1", 13, ($scope) => _text($scope.a, $scope._.i), 0, "a8", 0);
const $guest_content = _content$1("a3", "<p> </p>", "D ", $guest_content__input_guestText);
const $admin_content__input_rows = /*@__PURE__*/ _closure_get_patch("a0", 12, ($scope) => $input_rows($scope.a, $scope._.h), 0, "a7", 0);
const $admin_content = _content$1("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $admin_content__input_rows);
const $n = _let(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.l + 1);
}));
