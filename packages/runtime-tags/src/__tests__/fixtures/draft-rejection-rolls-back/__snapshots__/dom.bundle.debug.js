// template.marko
const $template = "<button><!> <!></button><button>sync</button>";
const $walks = " D%c%l b";
const $d = /*@__PURE__*/ _draft("d/5", ($scope) => _text($scope["#text/1"], $scope.d));
const $n = /*@__PURE__*/ _let("n/4", ($scope) => $d($scope, $scope.n));
const $fail2 = _action("fail/7", "__tests__/template.marko_0_fail#7/action");
const $failNow2 = _action("failNow/9", "__tests__/template.marko_0_failNow#9/action");
const $caught = /*@__PURE__*/ _let("caught/11", ($scope) => _text($scope["#text/2"], $scope.caught));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.fail().catch((error) => {
			$caught($scope, error.message);
		});
	});
	_on($scope["#button/3"], "click", function() {
		try {
			$scope.failNow();
		} catch (error) {
			$caught($scope, error.message);
		}
	});
});
function $setup($scope) {
	$n($scope, 1);
	$fail2($scope, $fail($scope));
	$failNow2($scope, $failNow($scope));
	$caught($scope, "");
	$setup__script($scope);
}
const $fail = ($scope) => async () => {
	$d($scope, 5);
	await new Promise((resolve) => setTimeout(resolve, 50));
	throw new Error("failed");
};
const $failNow = ($scope) => function() {
	$d($scope, 6);
	throw new Error("failed now");
};
_resumed["__tests__/template.marko_0/fail"] = $fail;
_resumed["__tests__/template.marko_0/failNow"] = $failNow;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
