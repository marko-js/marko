// tags/none.marko
const $template$2 = "<span>none</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
var none_default = /*@__PURE__*/ _template("__tests__/tags/none.marko", $template$2, "b");

// tags/some.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
function $setup$1($scope) {
	$n($scope, 1);
}
var some_default = /*@__PURE__*/ _template("__tests__/tags/some.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = "<!><!><p> </p><button></button>";
const $walks = "b1bD l b";
_dynamic_tag_var_resume("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $v);
const $Tag = /*@__PURE__*/ _let("Tag/4", ($scope) => $dynamicTag($scope, $scope.Tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$Tag($scope, none_default);
}));
function $setup($scope) {
	$Tag($scope, some_default);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#5/var", ($scope, v) => _text($scope["#text/2"], String(v && v.n)));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
