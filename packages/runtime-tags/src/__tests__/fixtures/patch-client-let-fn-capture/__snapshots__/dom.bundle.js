// tags/outer.marko
const $input_label__OR__f = /*@__PURE__*/ _or_patch("b0", 6, ($scope) => _text($scope.a, $scope.f($scope.e)));
const $f = fill("b1", _let(5, $input_label__OR__f));

// template.marko
const $fn = ($scope) => (v) => $scope.d + v;
_bind_resume("a0 d", $fn);
