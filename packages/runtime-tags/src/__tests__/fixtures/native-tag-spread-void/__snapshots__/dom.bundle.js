// tags/my-img.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /* @__PURE__ */ _const(2, ($scope) => {
	_attrs($scope, "a", $scope.c);
	$input__script($scope);
});

// template.marko
const $cls__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$cls($scope, $scope.c === "a" ? "b" : "a");
}));
const $cls = /* @__PURE__ */ _let(2, ($scope) => {
	$input($scope.b, {
		class: $scope.c,
		src: "x.png",
		alt: "pic"
	});
	$cls__script($scope);
});
