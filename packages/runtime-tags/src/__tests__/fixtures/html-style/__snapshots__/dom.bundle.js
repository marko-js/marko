// template.marko
const $count = /* @__PURE__ */ _let(1, ($scope) => _text_content($scope.a, `
  .test {
    content: ${_to_text($scope.b)}
  }
`));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.b + 1);
}));
