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
const $_return2 = ($scope) => function(value) {
	$count$1($scope, value);
};
const $_return = ($scope) => function() {
	$count$1($scope, +$scope.count + 1);
};
_resumed["__tests__/tags/child.marko_0/_return2"] = $_return2;
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=inc>inc</button><button class=assign>assign</button><div><!>:<!></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b bD%c%l`)($walks$1);
const $pattern2 = _var_resume("__tests__/template.marko_0_$pattern#6/var", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$countChange2($scope, $pattern.countChange);
	$inc($scope, $pattern.inc);
	$missing2($scope, $pattern.missing);
});
const $count = /*@__PURE__*/ _const("count", ($scope) => _text($scope["#text/4"], $scope.count));
const $countChange2__script = _script("__tests__/template.marko_0_$countChange#8", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.$countChange($scope.count + 10);
}));
const $countChange2 = /*@__PURE__*/ _const("$countChange", $countChange2__script);
const $inc = /*@__PURE__*/ _const("inc");
const $missing2 = ($scope, $missing) => _text($scope["#text/5"], void 0 !== $missing ? $missing : "fallback");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.inc();
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $pattern2);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
