// tags/labeled.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $uid = ($scope, uid) => {
	_attr($scope.a, "for", uid);
	_attr($scope.c, "id", uid);
};
function $setup($scope) {
	$uid($scope, _id($scope));
}
const $input_name = ($scope, input_name) => _text($scope.b, input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var labeled_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $on = _let(5, ($scope) => {
	$dynamicTag($scope, $scope.f ? labeled_default : null, ($_) => ({ name: "a" }));
	$dynamicTag2($scope, $scope.f ? labeled_default : null, ($_) => ({ name: "b" }));
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
