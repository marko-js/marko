// template.marko
const $template = "<button>go</button><p id=draft> </p><p id=server> </p><p id=pending><!>/<!></p>";
const $walks = " bD lD lD%c%l";
const $count = /*@__PURE__*/ _draft("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $step2 = /*@__PURE__*/ _const("step", ($scope) => $step_pending($scope, $scope.step?.pending));
const $serverCount__OR__count = ($scope) => {
	$step2($scope, $step($scope));
};
const $run2__script = _script("__tests__/template.marko_0_run", ($scope) => _on($scope["#button/0"], "click", $scope.run));
const $run2 = /*@__PURE__*/ _const("run", ($scope) => {
	$run_pending($scope, $scope.run?.pending);
	$run2__script($scope);
});
const $serverCount__OR__count__OR__step = ($scope) => {
	$run2($scope, $run($scope));
};
const $serverCount = /*@__PURE__*/ _let("serverCount/5", ($scope) => {
	_text($scope["#text/2"], $scope.serverCount);
	$count($scope, $scope.serverCount);
	$serverCount__OR__count($scope);
	$serverCount__OR__count__OR__step($scope);
});
function $setup($scope) {
	$serverCount($scope, 0);
}
const $step_pending = /*@__PURE__*/ _let("step_pending/8", ($scope) => _text($scope["#text/3"], String($scope.step_pending)));
const $run_pending = /*@__PURE__*/ _let("run_pending/10", ($scope) => _text($scope["#text/4"], String($scope.run_pending)));
function $step($scope) {
	return _action($scope, "step", $step_pending, _action_async(function* () {
		$count.d($scope, $scope.count + 1);
		$serverCount($scope, yield resolveAfter($scope.serverCount + 1, 1));
	}));
}
function $run($scope) {
	return _action($scope, "run", $run_pending, _action_async(function* () {
		yield $scope.step();
		$count.d($scope, $scope.count + 10);
		$serverCount($scope, yield resolveAfter($scope.serverCount + 10, 2));
	}));
}
_resume("__tests__/template.marko_0/step", $step);
_resume("__tests__/template.marko_0/run", $run);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
