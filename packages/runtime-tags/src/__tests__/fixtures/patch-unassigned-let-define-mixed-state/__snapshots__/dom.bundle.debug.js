// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($Body_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($Body_content__walks);
const $if_content__a = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.a)));
const $if_content__setup = $if_content__a;
const $Body_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Body_content__a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "a", ($scope) => {
	$Body_content__if($scope, $scope.a ? 0 : 1);
	$if_content__a($scope);
});
const $Body_content__$params = ($scope, $params2) => $Body_content__$temp($scope, $params2[0]);
const $Body_content__$temp = ($scope, $temp) => $Body_content__a($scope, $temp.a);
const $k__OR__c = /*@__PURE__*/ _or(8, ($scope) => $Body_content__a($scope["#childScope/2"], $scope.c ? $scope.k + $scope.c : ""));
const $k = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _let("k/6", $k__OR__c));
const $input_v = $k;
const $c = /*@__PURE__*/ _let("c/7", ($scope) => {
	_text($scope["#text/1"], $scope.c);
	$k__OR__c($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$c($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_v($scope, input.v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
