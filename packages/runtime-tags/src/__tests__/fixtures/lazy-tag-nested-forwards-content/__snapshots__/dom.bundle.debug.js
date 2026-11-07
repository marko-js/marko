// child.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_content.mjs"));
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
const $input_content = ($scope, input_content) => $load_GrandChild_tag_input_content($scope["#childScope/1"], input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// grand-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, "b%c", 0, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_content.mjs"));
const $Child_content__count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $Child_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Child_content__count($scope, +$scope.count + 1);
}));
const $Child_content__setup = ($scope) => {
	$Child_content__count($scope, 0);
	$Child_content__setup__script($scope);
};
const $Child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button>count:<!></button>", " Db%", $Child_content__setup);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_content($scope["#childScope/1"], $Child_content($scope));
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
	"b%c",
	$setup
];
