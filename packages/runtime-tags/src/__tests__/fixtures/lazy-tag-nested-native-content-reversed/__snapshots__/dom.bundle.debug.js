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
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input.mjs"));
const $GrandChild_content__count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $GrandChild_content__setup__script = _script("__tests__/child.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$GrandChild_content__count($scope, +$scope.count + 1);
}));
const $GrandChild_content__setup = ($scope) => {
	$GrandChild_content__count($scope, 0);
	$GrandChild_content__setup__script($scope);
};
const $GrandChild_content = /*@__PURE__*/ _content("__tests__/child.marko_1*content", "<button>count:<!></button>", " Db%", $GrandChild_content__setup);
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_GrandChild_tag_input($scope["#childScope/1"], { content: $GrandChild_content($scope) });
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// grand-child.marko
const $template = "<div></div>";
const $walks = " b";
const $input__script = _script("__tests__/grand-child.marko_0_input#2", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$input__script($scope);
});
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => console.log("grand-child"));
const $setup = $setup__script;
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, " b", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
