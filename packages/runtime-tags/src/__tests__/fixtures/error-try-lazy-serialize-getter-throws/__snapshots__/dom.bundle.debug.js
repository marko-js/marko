// child.marko
const $template = "<button>x</button>";
const $walks = " b";
const $obj = /*@__PURE__*/ _const("obj");
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log($scope.obj);
}));
function $setup($scope) {
	$obj($scope, { get bad() {
		throw new Error("getter failed");
	} });
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, " b", $setup);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__err);
const $try_content__setup = ($scope) => $load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%/&", $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
