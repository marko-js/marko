// child.marko
const $template = "<button class=child><!>: <!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], $scope.count)));
const $input_value__render = /*@__PURE__*/ _render(($scope, input_value) => _text($scope["#text/1"], input_value));
const $input_value = ($scope, input_value) => {
	$input_value__render($scope, input_value);
	$count($scope, input_value);
};
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=parent>parent: <!></button><!><!><!>";
const $walks = " Db%l%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.value));
const $value = /*@__PURE__*/ _let("value/4", ($scope) => {
	$value__render($scope);
	$load_Child_tag_input_value($scope["#childScope/3"], $scope.value);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
function $setup($scope) {
	$load_Child_setup($scope);
	$value($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
