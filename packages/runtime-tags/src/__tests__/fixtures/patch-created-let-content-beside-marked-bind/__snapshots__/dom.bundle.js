// tags/label.marko
const $input__script = _script("c0", ($scope) => console.log("run", $scope.b.get()));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _fill_let("d1", 5, ($scope) => $input_content($scope.b, $scope.f));
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// template.marko
const $getTitle = ($scope) => () => $scope.e;
_bind_resume("a0 e", $getTitle);
