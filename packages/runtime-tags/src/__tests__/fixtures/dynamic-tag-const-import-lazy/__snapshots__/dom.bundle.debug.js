// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_valueChange($scope.input_value + 1);
}));
const $setup = $setup__script;
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _text($scope["#text/1"], $scope.input_value));
const $input = ($scope, input) => {
	$input_valueChange($scope, input.valueChange);
	$input_value($scope, input.value);
};
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%/&bD l";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", ($_) => import("./child.mjs").then((mod) => mod.default));
let $load_type_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_type_tag_input_value = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_value.mjs"));
let $load_type_tag_input_valueChange = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_valueChange.mjs"));
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	$load_type_tag_input_value($scope["#childScope/1"], $scope.value);
	_text($scope["#text/2"], $scope.value);
});
function $setup($scope) {
	$load_type_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_type_tag_input_valueChange($scope["#childScope/1"], $valueChange($scope));
	$value($scope, 0);
}
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
