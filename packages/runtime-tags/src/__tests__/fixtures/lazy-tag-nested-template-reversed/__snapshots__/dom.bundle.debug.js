// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// counter.marko
const $template$1 = "<button>count:<!></button>";
const $walks$1 = " Db%l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/counter.marko", $template$1, $walks$1, $setup$1);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_tag = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_tag.mjs"));
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_GrandChild_tag_input_tag($scope["#childScope/1"], counter_default);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// grand-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $input_tag_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag = $dynamicTag;
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => console.log("grand-child"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_tag($scope, input.tag);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, "b%c", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
