// tags/badge/index.marko
const $template = "<em> </em>";
const $input_text = ($scope, input_text) => _text($scope.a, input_text);

// template.marko
const $for_content__input_note = /*@__PURE__*/ _for_closure_patch("a0", 0, ($scope) => $input_text($scope.b, $scope._.e), 6);
const $for_content__setup = $for_content__input_note;
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, /*@__PURE__*/ ((_w0) => `<li> ${_w0}</li>`)($template), /*@__PURE__*/ ((_w0) => `D b/${_w0}&l`)("D l"), $for_content__setup, $for_content__$params);
const $items = _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, "b"]);
}));
