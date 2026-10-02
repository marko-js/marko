// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Parent_setup = /*@__PURE__*/ _load_setup(() => import("./v:parent.marko.setup.mjs"));
function $setup($scope) {
	$load_Parent_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// nested.marko
const $template = "<button class=nested>nested:<!></button>";
const $walks = " Db%l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/nested.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.input_shared).length);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_shared($scope, input.shared);
const $input_shared = /*@__PURE__*/ _const("input_shared");
var nested_default = /*@__PURE__*/ _template("__tests__/nested.marko", $template, $walks, $setup, $input);

// parent.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Nested_setup = /*@__PURE__*/ _load_setup(() => import("./v:nested.marko.setup.mjs"));
let $load_Nested_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:nested.marko.input_shared.mjs"));
const $await_content__shared = /*@__PURE__*/ _const("shared", ($scope) => $load_Nested_tag_input_shared($scope["#childScope/4"], $scope.shared));
const $await_content__count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/2"], $scope.count));
const $await_content__setup__script = _script("__tests__/parent.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__count($scope, $scope.count + Object.keys($scope.shared).length);
}));
const $await_content__setup = ($scope) => {
	$load_Nested_setup($scope, $scope["#childScope/4"], $scope["#text/3"]);
	$await_content__shared($scope, { n: 1 });
	$await_content__count($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button class=parent><!>:<!></button><!><!>", " D%c%l%/&", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("parent", 1));
}
var parent_default = /*@__PURE__*/ _template("__tests__/parent.marko", $template, "b%c", $setup);

// v:nested.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:parent.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
