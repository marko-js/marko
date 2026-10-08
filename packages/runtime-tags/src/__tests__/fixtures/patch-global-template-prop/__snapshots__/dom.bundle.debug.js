// tags/other.marko
const $template$2 = "<i>user=<!></i>";
const $walks$2 = "Db%l";
const $global_user = /*@__PURE__*/ _fill_global_join("user", "__tests__/tags/other.marko_0_$global_user#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.user);
});
function $setup$2($scope) {
	$global_user($scope);
}
var other_default = /*@__PURE__*/ _template("__tests__/tags/other.marko", $template$2, $walks$2, $setup$2);

// tags/child.marko
const $template$1 = "<div><!><b> </b></div>";
const $walks$1 = "D%bD m";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input_n = ($scope, input_n) => _text($scope["#text/1"], input_n);
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_n($scope, input.n);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/2", ($scope) => $input_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content($scope["#childScope/0"], other_default);
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
