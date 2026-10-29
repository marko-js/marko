// tags/card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("c", $template$1, "D l", 0, $input$1);

// tags/big.marko
const $template = "<strong> </strong>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var big_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("d3", 7, /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.i, ($_) => ({ label: $scope.h }))));
const $T = /*@__PURE__*/ _fill_let_change("d5", 8, $input_label__OR__T);
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));

// tags/v:card.marko.register-default.js
_resumed.c = card_default;

// tags/v:big.marko.register-default.js
_resumed.b = big_default;

// template.marko
function $tagChange() {}
_resumed.a0 = $tagChange;
