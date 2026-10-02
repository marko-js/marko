// child.marko
const $template = "<button class=child> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.input_shared).length);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_shared($scope, input.shared);
const $input_shared = /*@__PURE__*/ _const("input_shared");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&b%c";
const cache = { n: 1 };
function getShared() {
	return cache;
}
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content__shared = /*@__PURE__*/ _const("shared");
const $placeholder_content__count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $placeholder_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$placeholder_content__count($scope, $scope.count + Object.keys($scope.shared).length);
}));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__shared($scope, getShared());
	$placeholder_content__count($scope, 0);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "<button class=placeholder> </button>", " D ", $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 1));
};
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_shared($scope["#childScope/1"], getShared());
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
