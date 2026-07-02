// template.marko
const $template = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
const $walks = "D D lD D lD D oD D m";
const $count4 = /* @__PURE__ */ _let("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $count5 = /* @__PURE__ */ _let("$count/9", ($scope) => _text($scope["#text/3"], $scope.$count));
const $count6 = /* @__PURE__ */ _let("$count2/10", ($scope) => _text($scope["#text/5"], $scope.$count2));
const $count7 = /* @__PURE__ */ _let("$count3/11", ($scope) => _text($scope["#text/7"], $scope.$count3));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count4($scope, $scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$count5($scope, $scope.$count + 1);
	});
	_on($scope["#button/4"], "click", function() {
		$count6($scope, $scope.$count2 + 1);
	});
	_on($scope["#button/6"], "click", function() {
		$count7($scope, $scope.$count3 + 1);
	});
});
function $setup($scope) {
	$count4($scope, 0);
	$count5($scope, 0);
	$count6($scope, 0);
	$count7($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
