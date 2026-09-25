// child.marko
const $template = "<button class=child>inc</button><!><!>";
const $walks = " b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $await_promise($scope, $scope.n ? resolveAfter($scope.n) : $scope.n));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<button class=page> </button><!><!>";
const $walks = " D l%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%/&", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
