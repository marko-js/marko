// template.marko
const $template = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
const $walks = "D D lD D lD D oD D m";
const $count4__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count4($scope, $scope.count + 1);
}));
const $count4 = /* @__PURE__ */ _let("count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count4__script($scope);
});
const $count5__script = _script("__tests__/template.marko_0_$count", ($scope) => _on($scope["#button/2"], "click", function() {
	$count5($scope, $scope.$count + 1);
}));
const $count5 = /* @__PURE__ */ _let("$count/9", ($scope) => {
	_text($scope["#text/3"], $scope.$count);
	$count5__script($scope);
});
const $count6__script = _script("__tests__/template.marko_0_$count2", ($scope) => _on($scope["#button/4"], "click", function() {
	$count6($scope, $scope.$count2 + 1);
}));
const $count6 = /* @__PURE__ */ _let("$count2/10", ($scope) => {
	_text($scope["#text/5"], $scope.$count2);
	$count6__script($scope);
});
const $count7__script = _script("__tests__/template.marko_0_$count3", ($scope) => _on($scope["#button/6"], "click", function() {
	$count7($scope, $scope.$count3 + 1);
}));
const $count7 = /* @__PURE__ */ _let("$count3/11", ($scope) => {
	_text($scope["#text/7"], $scope.$count3);
	$count7__script($scope);
});
function $setup($scope) {
	$count4($scope, 0);
	$count5($scope, 0);
	$count6($scope, 0);
	$count7($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
