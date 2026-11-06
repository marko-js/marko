// tags/child/index.marko
const $template$1 = "<span>child:<!></span>";
const $walks$1 = "Db%l";
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	_return($scope, {
		count: $scope.count,
		inc: $_return($scope)
	});
	_text($scope["#text/0"], $scope.count);
});
function $setup$1($scope) {
	$count($scope, 1);
}
const $_return = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resumed["__tests__/tags/child/index.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=inc>inc</button><div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& bD l`)($walks$1);
const $pattern2 = _var_resume("__tests__/template.marko_0_$pattern#4/var", ($scope, $pattern) => {
	_text($scope["#text/3"], $pattern.count);
	$inc($scope, $pattern.inc);
});
const $inc = /*@__PURE__*/ _const("inc");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.inc();
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $pattern2);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
