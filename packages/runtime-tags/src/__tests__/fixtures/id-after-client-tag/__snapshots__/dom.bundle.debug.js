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
const $template = "<button>toggle</button><!><input><label>after</label>";
const $walks = " b%b b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $on = /*@__PURE__*/ _let("on/4", ($scope) => $dynamicTag($scope, $scope.on ? labeled_default : null, ($_) => ({ name: "client" })));
const $after = ($scope, after) => {
	_attr($scope["#input/2"], "id", after);
	_attr($scope["#label/3"], "for", after);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$after($scope, _id($scope));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
