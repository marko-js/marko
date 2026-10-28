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
const $on = _let(4, ($scope) => $dynamicTag($scope, $scope.e ? labeled_default : null, ($_) => ({ name: "client" })));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.e);
}));
