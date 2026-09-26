// child.marko
const $template = "";
const $walks = "";
const $setup = () => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _return($scope, $scope.input_value * 2));
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", "", "", 0, $input);

// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%0&b D l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $value = /*@__PURE__*/ _let("value/5", ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope.value));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$value($scope, +$scope.value + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/1", $doubled);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$value($scope, 1);
	$setup__script($scope);
}
const $doubled = _var_resume("__tests__/template.marko_0_doubled#6/var", ($scope, doubled) => _text($scope["#text/4"], doubled));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	"",
	"",
	$setup
];
