// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button id=go> </button>";
const $walks = " D l";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "#go");
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", /*@__PURE__*/ $load_Child_trigger(($_) => import("./child.mjs").then((mod) => mod.default)));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
