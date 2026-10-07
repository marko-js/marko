// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = "<!><!><button>inc</button>";
const $walks = "b%b b";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__count__OR__picker = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.picker.get(), () => ({ value: $scope._.count })));
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__count__OR__picker);
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__picker._($scope);
};
const $if_content__picker = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__count__OR__picker);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$if($scope, $scope.count > 1 ? 0 : 1);
	$if_content__count($scope);
});
const $picker2 = /*@__PURE__*/ _const("picker");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$picker2($scope, { get: $picker });
	$setup__script($scope);
}
function $picker() {
	return child_default;
}
_resumed["__tests__/template.marko_0/picker"] = $picker;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
