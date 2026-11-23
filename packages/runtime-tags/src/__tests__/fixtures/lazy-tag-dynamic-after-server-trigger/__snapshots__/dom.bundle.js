// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("_a", /*@__PURE__*/ _load_event_trigger("click", "#go"));
const Child = /*@__PURE__*/ _load_template("a", /*@__PURE__*/ $load_Child_trigger(($_) => import("./child.mjs").then((mod) => mod.default)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(3);
const $show = /*@__PURE__*/ _let(4, ($scope) => $dynamicTag($scope, $scope.e ? Child : null, ($_) => ({ label: "dynamic" })));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.e);
}));

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("a", $template, "D l", 0, $input);
