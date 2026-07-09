// tags/child.marko
const $template$1 = "<span>child:<!></span>";
const $walks$1 = "Db%l";
const $count$1 = /*@__PURE__*/ _let("count/1", ($scope) => {
	_return($scope, {
		count: $scope.count,
		inc: $_return($scope),
		countChange: $_return2($scope)
	});
	_text($scope["#text/0"], $scope.count);
});
function $setup$1($scope) {
	$count$1($scope, 1);
}
function $_return2($scope) {
	return function(value) {
		$count$1($scope, value);
	};
}
function $_return($scope) {
	return function() {
		$count$1($scope, $scope.count + 1);
	};
}
_resume("__tests__/tags/child.marko_0/_return2", $_return2);
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=inc>inc</button><button class=assign>assign</button><div><!>:<!></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b bD%c%l`)($walks$1);
const $pattern2 = _var_resume("__tests__/template.marko_0_$pattern/var", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$countChange2($scope, $pattern.countChange);
	$inc($scope, $pattern.inc);
	$missing2($scope, $pattern.missing);
});
const $count__OR__$countChange__script = _script("__tests__/template.marko_0_count_$countChange", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.$countChange($scope.count + 10);
}));
const $count__OR__$countChange = /*@__PURE__*/ _or(9, $count__OR__$countChange__script, 1, "#scopeOffset/1");
const $count = /*@__PURE__*/ _const("count", ($scope) => {
	_text($scope["#text/4"], $scope.count);
	$count__OR__$countChange($scope);
});
const $countChange2 = /*@__PURE__*/ _const("$countChange", $count__OR__$countChange);
const $inc__script = _script("__tests__/template.marko_0_inc", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.inc();
}));
const $inc = /*@__PURE__*/ _const("inc", $inc__script);
const $missing3 = ($scope, missing) => _text($scope["#text/5"], missing);
const $missing2 = ($scope, $missing) => $missing3($scope, void 0 !== $missing ? $missing : "fallback");
function $setup($scope) {
	_var($scope, "#childScope/0", $pattern2);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
