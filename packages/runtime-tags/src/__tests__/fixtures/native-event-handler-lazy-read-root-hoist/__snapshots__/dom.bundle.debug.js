// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, {
	n: $scope.n,
	get: $_return($scope)
}));
function $setup$1($scope) {
	$n($scope, 1);
}
const $_return = ($scope) => () => $scope.n;
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=whole>whole</button><button class=mid>mid</button><div class=log> </div>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b bD l`)("");
const $get_getter = /*@__PURE__*/ _hoist("get");
const $log = /*@__PURE__*/ _let("log/5", ($scope) => _text($scope["#text/4"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$log($scope, Object.keys($scope.api).join());
	});
	_on($scope["#button/3"], "click", function() {
		$log($scope, `${$scope.api.n}:${$get_getter($scope)()}`);
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $api);
	$log($scope, "");
	$setup__script($scope);
}
const $api = /*@__PURE__*/ _const("api", ($scope) => $get($scope, $scope.api.get));
const $get = /*@__PURE__*/ _const("get", ($scope) => _assert_hoist($scope.get));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
