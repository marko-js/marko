// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
function $setup$1($scope) {
	$n($scope, 0);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", $setup$1);

// template.marko
const $template = "<!><!><!><button class=toggle></button>";
const $walks = "b1b%b b";
_dynamic_tag_var_resume("#text/0");
const $for_content__c__OR__m = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/1"], $scope.m + ":" + $scope._.c));
const $for_content__c = /*@__PURE__*/ _for_closure("#text/2", $for_content__c__OR__m);
const $for_content__m = /*@__PURE__*/ _let("m/4", $for_content__c__OR__m);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__m($scope, +$scope.m + 1);
	$b($scope._, +$scope._.b + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__c._($scope);
	$for_content__m($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__item = ($scope, item) => _attr_class($scope["#button/0"], "row" + item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $c = /*@__PURE__*/ _const("c", $for_content__c);
const $b__OR__v = /*@__PURE__*/ _or(8, ($scope) => $c($scope, ($scope.v ? $scope.v?.n : 0) + $scope.b), 1, "#scopeOffset/1");
const $b = /*@__PURE__*/ _let("b/4", $b__OR__v);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $v);
const $Tag = /*@__PURE__*/ _let("Tag/5", ($scope) => $dynamicTag($scope, $scope.Tag));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/6", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$Tag($scope, $scope.Tag ? null : child_default);
}));
function $setup($scope) {
	$b($scope, 0);
	$Tag($scope, child_default);
	$items($scope, [1, 2]);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#7/var", /*@__PURE__*/ _const("v", $b__OR__v));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
