// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__b__OR__d = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_b#3_d#6/init", 7, ($scope) => _text($scope["#text/0"], $scope.d + $scope.b));
const $if_content__d = /*@__PURE__*/ _const("d", $if_content__b__OR__d);
const $if_content__a__OR__c = /*@__PURE__*/ _or(5, ($scope) => $if_content__d($scope, $scope.a + $scope.c));
const $if_content__a = /*@__PURE__*/ _let("a/2", $if_content__a__OR__c);
const $if_content__b = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "b/3", $if_content__b__OR__d);
const $if_content__c = /*@__PURE__*/ _let("c/4", $if_content__a__OR__c);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__b($scope, +$scope.b + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__a($scope, 1);
	$if_content__b($scope, 2);
	$if_content__c($scope, 3);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span><button class=b>b</button>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
