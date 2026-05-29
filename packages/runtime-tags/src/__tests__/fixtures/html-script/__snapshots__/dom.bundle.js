// total: 2806 (min) 1434 (brotli)
// template.marko: 203 (min) 147 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	_text_content($scope.a, `
  {
    "imports": {
      "${_to_text($scope.c)}": "https://markojs.com",
    }
  }
`);
	_text($scope.b, $scope.c);
	$count__script($scope);
});
