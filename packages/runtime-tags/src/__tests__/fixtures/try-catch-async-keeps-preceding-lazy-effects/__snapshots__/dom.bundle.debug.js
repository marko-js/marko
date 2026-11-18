// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__err);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__v);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
