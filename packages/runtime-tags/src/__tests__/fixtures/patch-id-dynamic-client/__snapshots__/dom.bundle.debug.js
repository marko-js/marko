// tags/labeled.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
function $setup$1($scope) {
	$uid($scope, _id($scope));
}
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var labeled_default = /*@__PURE__*/ _template("__tests__/tags/labeled.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button>toggle</button><!><!><input><label>own</label>";
const $walks = " b%b%b b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $on = _let("on/5", ($scope) => {
	$dynamicTag($scope, $scope.on ? labeled_default : null, ($_) => ({ name: "a" }));
	$dynamicTag2($scope, $scope.on ? labeled_default : null, ($_) => ({ name: "b" }));
});
const $own = ($scope, own) => {
	_attr($scope["#input/3"], "id", own);
	_attr($scope["#label/4"], "for", own);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
	$own($scope, _id($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
