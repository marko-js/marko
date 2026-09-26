// tags/counter.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, {
	n: $scope.n,
	inc: $_return($scope)
}));
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
_resumed["__tests__/tags/counter.marko_0/_return"] = $_return;
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", "", "", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `b0${_w0}&%c`)("");
const $for_content__m__OR__c = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.c + ":" + $scope.m));
const $for_content__c = /*@__PURE__*/ _const("c", $for_content__m__OR__c);
const $for_content__v_n__OR__item = /*@__PURE__*/ _or(4, ($scope) => $for_content__c($scope, $scope._.v_n + $scope.item));
const $for_content__v_n = /*@__PURE__*/ _for_closure("#text/2", $for_content__v_n__OR__item);
const $for_content__m = /*@__PURE__*/ _let("m/5", $for_content__m__OR__c);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__m($scope, +$scope.m + 1);
	$scope._.v.inc();
}));
const $for_content__setup = ($scope) => {
	$for_content__v_n._($scope);
	$for_content__m($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_attr_class($scope["#button/0"], "row" + $scope.item);
	$for_content__v_n__OR__item($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $v = _var_resume("__tests__/template.marko_0_v#3/var", /*@__PURE__*/ _const("v", ($scope) => $v_n($scope, $scope.v?.n)));
const $v_n = /*@__PURE__*/ _const("v_n", $for_content__v_n);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
function $setup($scope) {
	_var($scope, "#childScope/0", $v);
	$setup$1($scope["#childScope/0"]);
	$for($scope, [[1, 2]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
