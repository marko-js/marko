// tags/alpha.marko
const $template$1 = "<i>A <!></i>";
const $walks$1 = "Db%l";
const $global_brand = /*@__PURE__*/ _global_join("brand", "b0", ($scope, $global_brand) => _text($scope.a, $scope.$.brand));
function $setup($scope) {
	$global_brand($scope, $scope.$.brand);
}
var alpha_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, $setup);

// tags/beta.marko
const $template = "<b>B</b>";
const $walks = "b";
var beta_default = /*@__PURE__*/ _template("c", $template, "b");

// tags/child.marko
const $Tag = /* @__PURE__ */ _dynamic_tag(0);
const $input_value = ($scope, input_value) => $Tag($scope, input_value % 2 ? alpha_default : beta_default);

// template.marko
const $n = /*@__PURE__*/ _let(6, ($scope) => $input_value($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
