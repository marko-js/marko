// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__count__OR__picker = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.d.get(), () => ({ value: $scope._.c })));
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, $if_content__count__OR__picker);
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__picker._($scope);
};
const $if_content__picker = /*@__PURE__*/ _if_closure(0, 0, $if_content__count__OR__picker);
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	$if($scope, $scope.c > 1 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $picker() {
	return child_default;
}
_resumed.a0 = $picker;
