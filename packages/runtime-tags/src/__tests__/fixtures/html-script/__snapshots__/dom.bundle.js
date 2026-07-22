// template.marko
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c));
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	$count__render($scope);
	_text_content($scope.a, `
  {
    "imports": {
      "${_to_text($scope.c)}": "https://markojs.com",
    }
  }
`);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
