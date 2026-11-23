// template.marko
const $template = "<button id=direct> </button><button id=const> </button><button id=assign><!> <!></button>";
const $walks = " D l D l D%c%l";
const $increment__script = _script("__tests__/template.marko_0_increment#8", ($scope) => _on($scope["#button/2"], "click", $scope.increment));
const $increment = /*@__PURE__*/ _const("increment", $increment__script);
const $count__script = _script("__tests__/template.marko_0_count#7", ($scope) => _on($scope["#button/0"], "click", new Proxy(() => $count($scope, +$scope.count + 1) - 1, {})));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_text($scope["#text/3"], $scope.count);
	$increment($scope, new Proxy(() => $count($scope, +$scope.count + 1) - 1, {}));
	$count__script($scope);
});
const $b = /*@__PURE__*/ _let_change("b/12", ($scope) => _text($scope["#text/6"], $scope.b));
const $log = ($scope, log) => $b($scope, 1, log);
const $a = /*@__PURE__*/ _let_change("a/10", ($scope) => _text($scope["#text/5"], $scope.a));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$a($scope, 2);
	$b($scope, 3);
}));
function $setup($scope) {
	$count($scope, 0);
	$log($scope, new Proxy((next) => console.log("const", next), {}));
	$a($scope, 1, new Proxy((next) => console.log("direct", next), {}));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
