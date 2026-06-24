// child.marko
const $template = "<button class=child><!>: <!></button>";
const $walks = " D%c%l";
const $setup = () => {};
const $count__script = _script("__tests__/child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => {
	_text($scope["#text/1"], input_value);
	$count($scope, input_value);
};
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=parent>parent: <!></button><!><!><!>";
const $walks = " Db%l%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /*@__PURE__*/ _let("value/4", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$load_Child_tag_input_value($scope["#childScope/3"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$load_Child_setup($scope);
	$value($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
