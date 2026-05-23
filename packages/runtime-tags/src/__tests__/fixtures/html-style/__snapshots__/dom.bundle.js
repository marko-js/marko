// total: 2545 (min) 1331 (brotli)
// template.marko: 152 (min) 126 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.b + 1);
}));
const $count = /* @__PURE__ */ _let(1, ($scope) => {
	_text_content($scope.a, `
  .test {
    content: ${_to_text($scope.b)}
  }
`);
	$count__script($scope);
});
