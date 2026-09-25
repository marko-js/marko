// template.marko
const $Heading_content__input_type = /* @__PURE__ */ _dynamic_tag(0, /* @__PURE__ */ _content("a0", "define body: not registered"));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$Heading_content__input_type($scope.d, $scope.e % 2 ? "h2" : "h3");
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
