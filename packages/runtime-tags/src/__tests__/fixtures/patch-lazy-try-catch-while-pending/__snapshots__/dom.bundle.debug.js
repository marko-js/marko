// template.marko
const $template = "<main><!></main>";
const $walks = "D%/&l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__setup__$global_name = /*@__PURE__*/ _fill_global_join("__tests__/child.marko_4_$global_name#0:9", ($scope) => _text($scope["#text/0"], $scope.$global.name), "name");
const $await_content__setup = $await_content__setup__$global_name;
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $catch_content = _content("__tests__/child.marko_3*content", "<s>caught</s>");
const $placeholder_content = _content("__tests__/child.marko_2*content", "<i>loading</i>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!> <!></em>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup__$global_promise = /*@__PURE__*/ _fill_global_join("__tests__/child.marko_1_$global_promise#0:7", ($scope) => $try_content__await_promise($scope, $scope.$global.promise), "promise");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__setup__$global_promise($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
function $setup($scope) {
	$try($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
