// child.marko
const $template = "<span>child:<!>:<!></span><!><!>";
const $walks = "Db%c%l%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_value = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_value.mjs"));
let $load_GrandChild_tag_input_valueChange = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_valueChange.mjs"));
const $value = /*@__PURE__*/ _let("value/7", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$load_GrandChild_tag_input_value($scope["#childScope/3"], $scope.value);
});
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$load_GrandChild_tag_input_valueChange($scope["#childScope/3"], $valueChange($scope));
	$value($scope, 0);
}
const $input_count = ($scope, input_count) => _text($scope["#text/0"], input_count);
const $input = ($scope, input) => $input_count($scope, input.count);
const $valueChange = ($scope) => (_new_value) => $value($scope, _new_value);
_resumed["__tests__/child.marko_0/valueChange"] = $valueChange;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// grand-child.marko
const $template = "<button class=grand-child>grand-child:<!></button>";
const $walks = " Db%l";
const $value = /*@__PURE__*/ _let_change("value/7", ($scope) => _text($scope["#text/1"], $scope.value));
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(6, ($scope) => $value($scope, $scope.input_value, $scope.input_valueChange));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, +$scope.value + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=page>page:<!></button><!><!>";
const $walks = " Db%l%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_count = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_count.mjs"));
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$load_Child_tag_input_count($scope["#childScope/3"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
