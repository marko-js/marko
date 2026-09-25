// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, { open: false });
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=open>open</button><button class=read>read</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b b`)("");
const $state = /*@__PURE__*/ _const("state");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$scope.state.open = true;
	});
	_on($scope["#button/3"], "click", function() {
		console.log("read", $scope.state?.open);
	});
});
function $setup($scope) {
	_var($scope, "#childScope/0", $state);
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
