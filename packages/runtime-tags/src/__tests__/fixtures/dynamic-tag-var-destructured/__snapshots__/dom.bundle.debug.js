// tags/child/index.marko
const $template$1 = "<span>child:<!></span>";
const $walks$1 = "Db%l";
const $count$1 = /*@__PURE__*/ _let("count/1", ($scope) => {
	_return($scope, {
		count: $scope.count,
		inc: $_return($scope)
	});
	_text($scope["#text/0"], $scope.count);
});
function $setup$1($scope) {
	$count$1($scope, 1);
}
function $_return($scope) {
	return function() {
		$count$1($scope, $scope.count + 1);
	};
}
_resume("__tests__/tags/child/index.marko_0/_return", $_return);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=inc>inc</button><div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b0${_w0}& bD l`)($walks$1);
const $pattern2 = _var_resume("__tests__/template.marko_0_$pattern/var", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$inc($scope, $pattern.inc);
});
const $count = ($scope, count) => _text($scope["#text/3"], count);
const $inc__script = _script("__tests__/template.marko_0_inc", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.inc();
}));
const $inc = /*@__PURE__*/ _const("inc", $inc__script);
function $setup($scope) {
	_var($scope, "#childScope/0", $pattern2);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
