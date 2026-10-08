// tags/picker/card.marko
const $template = "<em><!> <!></em>";
const $walks = "D%c%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "b0", ($scope) => {
	_text($scope.b, $scope.$.brand);
});
const $input = ($scope, input) => $input_label($scope, input.label);
function $setup($scope) {
	$global_brand($scope);
}
var card_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/picker/index.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_on__OR__input_label = /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _fill_join("c0", 3, /*@__PURE__*/ _shell_or("c2", 5, ($scope) => $dynamicTag($scope, $scope.d ? card_default : null, () => ({ label: $scope.e })))));
const $input_on = /*@__PURE__*/ _const(3, $input_on__OR__input_label);

// template.marko
const $on = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_on($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.f);
}));
