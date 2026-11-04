// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/btn.marko
const $n = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// tags/defn.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("d2", 7, ($scope) => _text($scope.b, $scope._.d), 0, "d3", 0);
const $Inner_content__setup__script = _script("d1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.d);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content$1("d0", "<b> </b>", " D ", $Inner_content__setup);
