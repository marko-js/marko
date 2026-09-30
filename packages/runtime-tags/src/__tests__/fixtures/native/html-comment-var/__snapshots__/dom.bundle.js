// tags/parent-el.marko
const $tagName = /*@__PURE__*/ _let(1, ($scope) => _return($scope, $scope.b));
const $setup__script = _script("b0", ($scope) => $tagName($scope, $scope.a.parentElement.tagName));

// template.marko
const $divName = _var_resume("a0", ($scope, divName) => _text($scope.c, divName));
const $spanName = _var_resume("a1", ($scope, spanName) => _text($scope.f, spanName));
