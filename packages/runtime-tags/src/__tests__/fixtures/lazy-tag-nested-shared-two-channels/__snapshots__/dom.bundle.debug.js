// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_A_setup = /*@__PURE__*/ _load_setup(() => import("./v:a.marko.setup.mjs"));
function $setup($scope) {
	$load_A_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// a.marko
const $template = "<button class=a>a:<!></button><!><!>";
const $walks = " Db%l%/&c";
let $load_B_setup = /*@__PURE__*/ _load_setup(() => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_objA = /*@__PURE__*/ _load_signal(() => import("./v:b.marko.input_objA.mjs"));
const $objA = /*@__PURE__*/ _const("objA", ($scope) => $load_B_tag_input_objA($scope["#childScope/3"], $scope.objA));
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/a.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.objA).length);
}));
function $setup($scope) {
	$load_B_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$objA($scope, { name: "a" });
	$count($scope, 0);
	$setup__script($scope);
}
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template, $walks, $setup);

// b.marko
const $template = "<button class=b>b:<!></button><!><!>";
const $walks = " Db%l%/&c";
let $load_C_setup = /*@__PURE__*/ _load_setup(() => import("./v:c.marko.setup.mjs"));
let $load_C_tag_input_objA = /*@__PURE__*/ _load_signal(() => import("./v:c.marko.input_objA.mjs"));
let $load_C_tag_input_objB = /*@__PURE__*/ _load_signal(() => import("./v:c.marko.input_objB.mjs"));
const $objB = /*@__PURE__*/ _const("objB", ($scope) => $load_C_tag_input_objB($scope["#childScope/3"], $scope.objB));
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.objB).length);
}));
function $setup($scope) {
	$load_C_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$objB($scope, { name: "b" });
	$count($scope, 0);
	$setup__script($scope);
}
const $input_objA = ($scope, input_objA) => $load_C_tag_input_objA($scope["#childScope/3"], input_objA);
const $input = ($scope, input) => $input_objA($scope, input.objA);
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template, $walks, $setup, $input);

// c.marko
const $template = "<button class=c>c:<!></button>";
const $walks = " Db%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/c.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + (Object.keys($scope.input_objA).length + Object.keys($scope.input_objB).length));
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_objA($scope, input.objA);
	$input_objB($scope, input.objB);
};
const $input_objA = /*@__PURE__*/ _const("input_objA");
const $input_objB = /*@__PURE__*/ _const("input_objB");
var c_default = /*@__PURE__*/ _template("__tests__/c.marko", $template, $walks, $setup, $input);

// v:a.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:c.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
