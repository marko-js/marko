// template.marko
const $template = "<button id=fast>fast</button><button id=slow>slow</button><p id=draft> </p><p id=server> </p><p id=pending><!>/<!></p>";
const $walks = " b bD lD lD%c%l";
const $total = /*@__PURE__*/ _draft("total/7", ($scope) => _text($scope["#text/2"], $scope.total));
const $addFast2__script = _script("__tests__/template.marko_0_addFast", ($scope) => _on($scope["#button/0"], "click", $scope.addFast));
const $addFast2 = /*@__PURE__*/ _const("addFast", ($scope) => {
	$addFast_pending($scope, $scope.addFast?.pending);
	$addFast2__script($scope);
});
const $addSlow2__script = _script("__tests__/template.marko_0_addSlow", ($scope) => _on($scope["#button/1"], "click", $scope.addSlow));
const $addSlow2 = /*@__PURE__*/ _const("addSlow", ($scope) => {
	$addSlow_pending($scope, $scope.addSlow?.pending);
	$addSlow2__script($scope);
});
const $serverTotal__OR__total = ($scope) => {
	$addFast2($scope, $addFast($scope));
	$addSlow2($scope, $addSlow($scope));
};
const $serverTotal = /*@__PURE__*/ _let("serverTotal/6", ($scope) => {
	_text($scope["#text/3"], $scope.serverTotal);
	$total($scope, $scope.serverTotal);
	$serverTotal__OR__total($scope);
});
function $setup($scope) {
	$serverTotal($scope, 0);
}
const $addFast_pending = /*@__PURE__*/ _let("addFast_pending/9", ($scope) => _text($scope["#text/4"], String($scope.addFast_pending)));
const $addSlow_pending = /*@__PURE__*/ _let("addSlow_pending/11", ($scope) => _text($scope["#text/5"], String($scope.addSlow_pending)));
function $addFast($scope) {
	return _action($scope, "addFast", $addFast_pending, async () => {
		$total.d($scope, $scope.total + 1);
		$serverTotal($scope, await resolveAfter($scope.serverTotal + 1, 1));
	});
}
function $addSlow($scope) {
	return _action($scope, "addSlow", $addSlow_pending, async () => {
		$total.d($scope, $scope.total + 10);
		$serverTotal($scope, await resolveAfter($scope.serverTotal + 10, 2));
	});
}
_resume("__tests__/template.marko_0/addFast", $addFast);
_resume("__tests__/template.marko_0/addSlow", $addSlow);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
