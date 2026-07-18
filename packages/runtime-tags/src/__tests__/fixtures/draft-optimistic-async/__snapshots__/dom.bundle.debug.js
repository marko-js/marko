// template.marko
const $template = "<button>go</button><p id=draft> </p><p id=server> </p><p id=pending> </p>";
const $walks = " bD lD lD l";
const $count = /*@__PURE__*/ _draft("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $increment2__script = _script("__tests__/template.marko_0_increment", ($scope) => _on($scope["#button/0"], "click", $scope.increment));
const $increment2 = /*@__PURE__*/ _const("increment", ($scope) => {
	$increment_pending($scope, $scope.increment?.pending);
	$increment2__script($scope);
});
const $serverCount__OR__count = ($scope) => {
	$increment2($scope, $increment($scope));
};
const $serverCount = /*@__PURE__*/ _let("serverCount/4", ($scope) => {
	_text($scope["#text/2"], $scope.serverCount);
	$count($scope, $scope.serverCount);
	$serverCount__OR__count($scope);
});
function $setup($scope) {
	$serverCount($scope, 0);
}
const $increment_pending = /*@__PURE__*/ _let("increment_pending/7", ($scope) => _text($scope["#text/3"], String($scope.increment_pending)));
function $increment($scope) {
	return _action($scope, "increment", $increment_pending, _action_async(function* () {
		$count.d($scope, $scope.count + 5);
		$serverCount($scope, yield resolveAfter($scope.serverCount + 1));
	}));
}
_resume("__tests__/template.marko_0/increment", $increment);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
