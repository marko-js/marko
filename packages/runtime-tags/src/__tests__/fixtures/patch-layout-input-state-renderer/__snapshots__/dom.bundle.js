// layout.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_nav__OR__input_label = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.e, ($_) => ({ label: $scope.f })))));
const $input_nav = /*@__PURE__*/ _const(4, $input_nav__OR__input_label);

// nav-a.marko
const $template$1 = "<nav>A <!></nav>";
const $walks$1 = "Db%l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var nav_a_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, 0, $input$1);

// nav-b.marko
const $template = "<nav>B <!></nav>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var nav_b_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// v:nav-a.marko.register-default.js
_resumed.b = nav_a_default;

// v:nav-b.marko.register-default.js
_resumed.c = nav_b_default;

// template.marko
const $Layout_content__setup = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$alt($scope._, !$scope._.e);
}));
const $alt = /*@__PURE__*/ _let(4, ($scope) => $input_nav($scope.a, $scope.e ? nav_b_default : nav_a_default));
