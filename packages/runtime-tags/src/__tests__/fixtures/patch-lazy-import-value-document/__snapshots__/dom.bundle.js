// other.marko
const $template = "<span class=other>other <!></span>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var other_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const Child = /*@__PURE__*/ _load_template("a", ($_) => import("./child.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $if_content__input_label__OR__alt = /*@__PURE__*/ _fill_signal("4 c3", /*@__PURE__*/ _or_resume("c5", 3, ($scope) => $if_content__dynamicTag($scope, $scope.c ? Child : other_default, ($_) => ({ label: $scope._.e }))), _if_closure, 0, 0);
const $if_content__alt = /*@__PURE__*/ _fill_let("c1", 2, $if_content__input_label__OR__alt);
const $if_content__setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$if_content__alt($scope, !$scope.c);
}));

// child.marko
const $template = "<span class=child>child <!></span>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("a", $template, $walks, 0, $input);
