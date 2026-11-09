// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $count = /*@__PURE__*/ _let("count/0", ($scope) => _return($scope, { get: $_return($scope) }));
function $setup$1($scope) {
	$count($scope, 1);
}
const $_return = ($scope) => () => $scope.count;
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = "<!><!><button class=hoisted>hoisted</button><div> </div>";
const $walks = "b%b bD l";
const $get_getter = /*@__PURE__*/ _hoist("get", "BranchScopes:#text/0");
const $if_content__x = /*@__PURE__*/ _const("x", ($scope) => $if_content__get($scope, $scope.x.get));
const $if_content__get = /*@__PURE__*/ _const("get", ($scope) => _assert_hoist($scope.get));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$log($scope._, $scope._.log + typeof $scope.x);
}));
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $if_content__x);
	$if_content__setup__script($scope);
};
const $log = /*@__PURE__*/ _let("log/3", ($scope) => _text($scope["#text/2"], $scope.log));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<button class=whole>whole</button>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}& b`)(""), $if_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$log($scope, $scope.log + `[${$get_getter($scope)()}]`);
}));
function $setup($scope) {
	$log($scope, "");
	$if($scope, true ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
