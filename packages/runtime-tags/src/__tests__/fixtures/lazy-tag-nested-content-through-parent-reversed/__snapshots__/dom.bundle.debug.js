// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Parent_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:parent.marko.setup.mjs"));
function $setup($scope) {
	$load_Parent_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("child"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b%c", $setup, $input);

// grand-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => console.log("grand-child"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, "b%c", $setup, $input);

// parent.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_content.mjs"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_content.mjs"));
const $GrandChild_content__count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $GrandChild_content__setup__script = _script("__tests__/parent.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$GrandChild_content__count($scope, +$scope.count + 1);
}));
const $GrandChild_content__setup = ($scope) => {
	$GrandChild_content__count($scope, 0);
	$GrandChild_content__setup__script($scope);
};
const $GrandChild_content = /*@__PURE__*/ _content("__tests__/parent.marko_2*content", "<button>count:<!></button>", " Db%", $GrandChild_content__setup);
const $Child_content__setup = ($scope) => {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_GrandChild_tag_input_content($scope["#childScope/1"], $GrandChild_content($scope));
};
const $Child_content = /*@__PURE__*/ _content("__tests__/parent.marko_1*content", "<!><!><!>", "b%/&", $Child_content__setup);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_content($scope["#childScope/1"], $Child_content($scope));
}
var parent_default = /*@__PURE__*/ _template("__tests__/parent.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];

// v:parent.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
