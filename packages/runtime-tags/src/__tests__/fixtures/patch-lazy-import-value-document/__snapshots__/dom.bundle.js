// other.marko
const $template = "<span class=other>other <!></span>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var other_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const Child = /*@__PURE__*/ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $if_content__input_label__OR__alt = _fill_join("c2", 2, /*@__PURE__*/ _fill_join_if("c3", 4, /*@__PURE__*/ _init_join("c5", /*@__PURE__*/ _or(3, ($scope) => $if_content__dynamicTag($scope, $scope.c ? Child : other_default, () => ({ label: $scope._.e })))), 0, 0, 0));
const $if_content__alt = /*@__PURE__*/ _fill_let("c2", 2, $if_content__input_label__OR__alt);
const $if_content__setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$if_content__alt($scope, !$scope.c);
}));

// child.marko
const $template = "<span class=child>child <!></span>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("a", $template, $walks, 0, $input);
