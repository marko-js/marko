// tags/picker/card.marko
const $template = "<em><!> <!></em>";
const $walks = "D%c%l";
const $input_label$2 = ($scope, input_label) => _text($scope.a, input_label);
const $global_brand = /*@__PURE__*/ _global_join("brand", "b0", ($scope, $global_brand) => _text($scope.b, $scope.$.brand));
const $input = ($scope, input) => $input_label$2($scope, input.label);
function $setup($scope) {
	$global_brand($scope, $scope.$.brand);
}
var card_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/picker/index.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_on__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.d ? card_default : null, () => ({ label: $scope.e })));
const $input_on = /*@__PURE__*/ _const(3, $input_on__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const(4, $input_on__OR__input_label);

// template.marko
const $on = /*@__PURE__*/ _let(5, ($scope) => $input_on($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.f);
}));
const $input_label = _fill_const("a0", 4, ($scope) => $input_label$1($scope.a, $scope.e));
