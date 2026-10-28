// counter.marko
const $template$1 = "<b> </b>";
const $walks$1 = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var counter_default = /*@__PURE__*/ _template("a", $template$1, "D l", 0, $input$1);

// other.marko
const $template = "<i> </i>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var other_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/chooser.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_Tag__OR__input_label = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.e, ($_) => ({ label: $scope._.f })));
const $if_content__input_Tag = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_Tag__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_Tag._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_Tag__OR__input_label);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script$2 = _script("e0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.g);
}));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script$1 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _let(5, ($scope) => $input_content($scope.b, $scope.f));
const $setup__script = _script("f0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// v:counter.marko.register-default.js
_resumed.a = counter_default;

// v:other.marko.register-default.js
_resumed.b = other_default;
