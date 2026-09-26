// tags/child.marko
const $template = "";
const $walks = "";
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, { n: $scope.a }));
function $setup($scope) {
	$n($scope, 0);
}
var child_default = /*@__PURE__*/ _template("b", "", "", $setup);

// template.marko
_dynamic_tag_var_resume(0);
const $for_content__c__OR__m = /*@__PURE__*/ _or(5, ($scope) => _text($scope.b, $scope.e + ":" + $scope._.j));
const $for_content__c = /*@__PURE__*/ _for_closure(2, $for_content__c__OR__m);
const $for_content__m = /*@__PURE__*/ _let(4, $for_content__c__OR__m);
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__m($scope, +$scope.e + 1);
	$b($scope._, +$scope._.e + 1);
}));
const $c = /*@__PURE__*/ _const(9, $for_content__c);
const $b__OR__v = /*@__PURE__*/ _or(8, ($scope) => $c($scope, ($scope.h ? $scope.h?.n : 0) + $scope.e), 1, 1);
const $b = /*@__PURE__*/ _let(4, $b__OR__v);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, () => $v);
const $Tag = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$Tag($scope, $scope.f ? null : child_default);
}));
const $v = _var_resume("a0", /*@__PURE__*/ _const(7, $b__OR__v));
