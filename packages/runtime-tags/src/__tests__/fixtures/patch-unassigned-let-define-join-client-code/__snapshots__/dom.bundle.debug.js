// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)($Row_content__walks);
const $Row_content__uid__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "n", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope._.uid + "-" + $scope.n)));
const $Row_content__uid = /*@__PURE__*/ _closure_get("uid/9", $Row_content__uid__OR__n);
const $Row_content__setup = $Row_content__uid;
const $Row_content__n = /*@__PURE__*/ _const("n", $Row_content__uid__OR__n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $uid__closure = /*@__PURE__*/ _closure($Row_content__uid);
const $uid = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _let("uid/7", $uid__closure));
const $input_id = $uid;
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_name = ($scope, input_name) => $Row_content__n($scope["#childScope/0"], input_name);
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_name($scope, input.name);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
