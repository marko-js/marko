// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_content.mjs"));
const $GrandChild_content__count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $GrandChild_content__setup__script = _script("__tests__/child.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$GrandChild_content__count($scope, +$scope.count + 1);
}));
const $GrandChild_content__setup = ($scope) => {
	$GrandChild_content__count($scope, 0);
	$GrandChild_content__setup__script($scope);
};
const $GrandChild_content = /*@__PURE__*/ _content("__tests__/child.marko_2*content", "<button> </button>", " D ", $GrandChild_content__setup);
const $for_content__setup = ($scope) => {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_GrandChild_tag_input_content($scope["#childScope/1"], $GrandChild_content($scope));
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/0", "<!><!><!>", "b%/&", $for_content__setup);
function $setup($scope) {
	$for($scope, [3]);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b%c", $setup);

// grand-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, "b%c", 0, $input);

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
